import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'
import { createCard } from '$lib/server/database'
import { Prisma } from '$lib/db'

export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json()
    const card = createCard(body as Prisma.CardCreateInput)
    return json(card)
}
