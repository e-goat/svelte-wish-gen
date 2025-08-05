import { getCardBySlug } from '$lib/server/database'

import type { RequestEvent, RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ params }: RequestEvent) => {
    const slug = params.slug
    if (!slug) {
        return new Response(
            JSON.stringify({ message: 'Missing slug parameter' }),
            {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            }
        )
    }
    await getCardBySlug(slug)
    return new Response(
        JSON.stringify({
            message: 'Success',
        }),
        {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        }
    )
}
