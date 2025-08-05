import { getAllTemplates } from '$lib/server/database'

import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {
    const getTemplates = await getAllTemplates()
    return new Response(
        JSON.stringify({
            message: 'Success',
            templates: getTemplates,
        }),
        {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        }
    )
}
