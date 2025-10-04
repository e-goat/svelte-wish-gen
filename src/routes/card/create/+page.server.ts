import type { PageServerLoad } from "./$types";
import type { Actions } from "@sveltejs/kit";
import { rs, ss } from "$lib/state.svelte";
import { VercelStorageController } from "$lib/controller/VercelStorage";
import { MailController } from "$lib/controller/Mail";

import * as db from "$lib/server/database";
import { fail } from "@sveltejs/kit";
import { createCard } from "$lib/server/database";
import { Prisma } from "$lib/db";

export const load: PageServerLoad = async ({ url }) => {
    const limit: number = Number(url.searchParams.get("limit")) || 10;
    const skip: number = Number(url.searchParams.get("skip")) || 0;
    const currentPage: number = Math.floor(skip / limit) + 1;

    const type = url.searchParams.get("type") || "";
    let result = await db.getAllTemplates(limit, skip);

    if (type) {
        result = await db.getAllTemplatesByType(limit, skip, type);
    }

    const categories = await db.getAllCategories();

    return {
        templates: result.templates,
        categories,
        total: result.total,
        currentPage,
        pageSize: limit,
    };
};

export const actions: Actions = {
    create: async ({ request, fetch }) => {
        const formData = await request.formData();
        const card = JSON.parse(formData.get("card") as string);
        let cardInput: Prisma.CardCreateInput;
        ss.isSubmitting = true;

        try {
            // Page 1 validations
            if (
                !card.title?.trim() ||
                !card.receiver?.trim() ||
                !card.sender?.trim()
            ) {
                ss.isSubmitting = false;
                return fail(400, {
                    card,
                    error: "Моля, попълнете всички полета.",
                    errorStep: 1,
                    missing: true,
                });
            }

            // Page 2 validations
            if (!card.templateId) {
                ss.isSubmitting = false;
                ss.currentStep = 2;
                return fail(400, {
                    card,
                    error: "Моля, изберете шаблон за картичката.",
                    errorStep: 2,
                });
            }

            cardInput = {
                title: card.title,
                description: card.description,
                sender: card.sender,
                receiver: card.receiver,
                slug: card.slug,
                audioUrl: card.audioUrl,
                cardUuid: card.cardUuid,
                template: {
                    connect: { id: card.templateId },
                },
            };

            const file = formData.get("record") as File | null;
            if (file) {
                const storeResponse = await VercelStorageController.store({
                    file: file,
                    mimeType: "webm",
                    uuid: cardInput.cardUuid as string,
                });
                cardInput.audioUrl = storeResponse.url;
            }
            console.log(cardInput.audioUrl);
            // await createCard(cardInput)

            // MailController.send({
            //     to: cardInput.receiver,
            //     from: cardInput.sender,
            //     name: cardInput.receiver,
            //     title: cardInput.title,
            //     senderName: cardInput.sender,
            // })

            return { success: true, card: cardInput };
        } catch (e) {
            ss.isSubmitting = false;
            console.error("Card creation error:", e);

            if (
                e instanceof Error &&
                e.message.includes("Card_templateId_fkey")
            ) {
                return fail(400, {
                    card,
                    error: "Избраният шаблон не съществува. Моля, изберете валиден шаблон.",
                });
            }

            return fail(500, {
                card,
                error: `Възникна грешка при създаването на картичката.`,
            });
        }
    },
} satisfies Actions;
