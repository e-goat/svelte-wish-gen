import { PrismaClient, Prisma } from '$lib/db'

const prisma = new PrismaClient()

export async function getCardBySlug(
    slug: string
): Promise<Prisma.CardGetPayload<{}> | null> {
    return prisma.card.findUnique({
        where: { slug },
    })
}

export async function createCard(
    data: Prisma.CardCreateInput
): Promise<Prisma.CardGetPayload<{}>> {
    return prisma.card.create({
        data,
    })
}
