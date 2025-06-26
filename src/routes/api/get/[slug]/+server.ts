import { error } from '@sveltejs/kit'
import type { RequestHandler } from '../$types'
import { getCardBySlug } from '$lib/server/database'

export const GET: RequestHandler = async ({ params }) => {
    let slug = params.slug
    let getCard = await getCardBySlug(slug)
    return new Response(
        JSON.stringify({
            message: 'Success',
            base64: getCard?.base64,
        }),
        {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        }
    )
}
