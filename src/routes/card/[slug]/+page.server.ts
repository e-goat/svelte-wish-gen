import type { PageServerLoad } from './$types'
import { getCardBySlug } from '$lib/server/database'

export const load: PageServerLoad = async ({ params }) => {
    return getCardBySlug(params.slug)
}
