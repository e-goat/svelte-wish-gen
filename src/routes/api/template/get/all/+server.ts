import { getAllTemplates } from '$lib/server/database'

import type { RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ url }) => {
    const limit: number = Number(url.searchParams.get('limit')) || 10
    const skip: number = Number(url.searchParams.get('skip')) || 0
    const result = await getAllTemplates(limit, skip)

    return new Response(
        JSON.stringify({
            message: 'Success',
            templates: result.templates,
            total: result.total,
        }),
        {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        }
    )
}
