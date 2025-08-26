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
    createCard: async ({ request }) => {
        const formData = await request.formData()
        const card = formData.get('card')
        if (!card) {
            return fail(400, {
                card,
                missing: true,
            })
        }
        let cardInput: Prisma.CardCreateInput
        try {
            cardInput = typeof card === 'string' ? JSON.parse(card) : card

            await createCard(cardInput)

            return { success: true, card: cardInput }
        } catch (e) {
            return fail(500, {
                card,
                error: `Failed to create card: ${e}`,
            })
        }
    },
}
