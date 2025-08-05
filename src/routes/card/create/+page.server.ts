import type { PageServerLoad } from '../../create/$types'
import type { Actions } from '@sveltejs/kit'
import { createCard } from '$lib/server/database'

import * as db from '$lib/server/database'
import { fail } from '@sveltejs/kit'

export const load: PageServerLoad = async () => {
    return {
        templates: await db.getAllTemplates(),
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
        let cardInput: any
        try {
            cardInput = typeof card === 'string' ? JSON.parse(card) : card
            await createCard(cardInput)
        } catch (e) {
            return fail(500, {
                card,
                error: 'Failed to create card',
            })
        }
    },
}
