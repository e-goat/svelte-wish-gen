import { PrismaClient, Prisma } from '$lib/db'
import { error } from '@sveltejs/kit'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

export async function getCardBySlug(slug: string) {
    return prisma.card.findUnique({
        where: { slug },
    })
}

export async function createCard(data: Prisma.CardCreateInput) {
    console.log(data)
    return prisma.card.create({
        data,
    })
}

export async function getAllTemplates(limit: number, skip: number) {
    if (limit > 100) {
        throw error(400, 'Bad Request')
    }

    const [templates, total] = await Promise.all([
        prisma.template.findMany({
            take: limit,
            skip: skip,
            orderBy: { createdAt: 'desc' },
            cacheStrategy: { ttl: 60 },
        }),
        prisma.template.count(),
    ])

    return { templates, total }
}
