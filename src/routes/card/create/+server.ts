import { json } from '@sveltejs/kit'
import type { RequestHandler } from '../../create/$types'
import { createCard } from '$lib/server/database'

type Data = {
    success: boolean
    errors: Record<string, string>
}

export const POST: RequestHandler = async ({ request }) => {
    const formData = await request.formData()
    const card = formData.get('card')
    const data: Data = {
        success: true,
        errors: {},
    }
    if (!card) {
        data.success = false
        data.errors.card = 'Card data is required'
    }
    let cardInput: any
    try {
        cardInput = typeof card === 'string' ? JSON.parse(card) : card
        await createCard(cardInput)
    } catch (e) {
        data.success = false
        data.errors.card = 'Failed to create card'
    }
    return json(data)
}
