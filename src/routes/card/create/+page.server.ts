import type { PageServerLoad } from './$types'
import type { Actions } from '@sveltejs/kit'

import * as db from '$lib/server/database'
import { fail } from '@sveltejs/kit'
import { createCard } from '$lib/server/database'
import { Prisma } from '$lib/db'

export const load: PageServerLoad = async ({ url }) => {
    const limit: number = Number(url.searchParams.get('limit')) || 10
    const skip: number = Number(url.searchParams.get('skip')) || 0
    const currentPage: number = Math.floor(skip / limit) + 1

    const result = await db.getAllTemplates(limit, skip)

    return {
        templates: result.templates,
        total: result.total,
        currentPage,
        pageSize: limit,
    }
}

export const actions: Actions = {
    create: async ({ request }) => {
        const formData = await request.formData()
        const card = formData.get('card')
        if (!card) {
            return fail(400, {
                card,
                missing: true,
            })
        }
        let cardData: any
        try {
            cardData = typeof card === 'string' ? JSON.parse(card) : card

            if (!cardData.templateId || cardData.templateId === 0) {
                return fail(400, {
                    card,
                    error: 'Моля, изберете шаблон за картичката.',
                })
            }

            if (
                !cardData.title?.trim() ||
                !cardData.receiver?.trim() ||
                !cardData.sender?.trim()
            ) {
                return fail(400, {
                    card,
                    missing: true,
                })
            }

            const cardInput: Prisma.CardCreateInput = {
                title: cardData.title,
                description: cardData.description,
                sender: cardData.sender,
                receiver: cardData.receiver,
                slug: cardData.slug,
                audioUrl: cardData.audioUrl,
                template: {
                    connect: { id: cardData.templateId },
                },
            }

            await createCard(cardInput)

            return { success: true, card: cardInput }
        } catch (e) {
            console.error('Card creation error:', e)

            if (
                e instanceof Error &&
                e.message.includes('Card_templateId_fkey')
            ) {
                return fail(400, {
                    card,
                    error: 'Избраният шаблон не съществува. Моля, изберете валиден шаблон.',
                })
            }

            return fail(500, {
                card,
                error: `Възникна грешка при създаването на картичката.`,
            })
        }
    },
}
