import { PrismaClient, Prisma } from '$lib/db'

const prisma = new PrismaClient()

export async function getCardBySlug(slug: string) {
    return prisma.card.findUnique({
        where: { slug },
    })
}

export async function createCard(data: Prisma.CardCreateInput) {
    return prisma.card.create({
        data,
    })
}
