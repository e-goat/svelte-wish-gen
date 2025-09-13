import type { PageServerLoad } from './$types'
import type { Actions } from '@sveltejs/kit'
import { rs, ss } from '$lib/state.svelte'

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
    create: async ({ request, fetch }) => {
        const formData = await request.formData()
        const card = JSON.parse(formData.get('card') as string)
        let cardInput: Prisma.CardCreateInput

        try {
            // Page 1 validations
            if (
                !card.title?.trim() ||
                !card.receiver?.trim() ||
                !card.sender?.trim()
            ) {
                return fail(400, {
                    card,
                    error: 'Моля, попълнете всички полета.',
                    errorStep: 1,
                    missing: true,
                })
            }

            // Page 2 validations
            if (!card.templateId) {
                ss.currentStep = 2
                return fail(400, {
                    card,
                    error: 'Моля, изберете шаблон за картичката.',
                    errorStep: 2,
                })
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
            }

            const record = formData.get('record') as File | null

            if (record) {
                const storeFormData = new FormData()

                storeFormData.append('record', record)
                storeFormData.append('cardUuid', cardInput.cardUuid as string)

                await fetch('/api/store', {
                    method: 'POST',
                    body: storeFormData,
                }).then(async (res) => {
                    const response = await res.json()
                    cardInput.audioUrl = response.url
                })
            }

            await createCard(cardInput)

            // await fetch('/api/send', {
            //     method: 'POST',
            //     body: JSON.stringify({
            //         receiver: cardInput.receiver,
            //         title: cardInput.title,
            //         sender: cardInput.sender,
            //     }),
            // }).then((res) => {
            //     if (!res.ok) {
            //         console.error({
            //             "status": res.status,
            //             "statusText": res.statusText,
            //             "body": res.body
            //         })
            //     }
            // })

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
} satisfies Actions
