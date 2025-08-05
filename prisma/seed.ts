import { PrismaClient, Prisma } from '$lib/db'
import { randomBase64 } from '$lib/utils/helpers'

export const prisma = new PrismaClient()

const templateData: Prisma.TemplateCreateInput[] = [
    {
        title: 'Happy Birthday John',
        type: 'BIRTHDAY',
        background: 'data:image/png;base64,' + randomBase64(1000),
        font: 'Arial',
    },
]

export async function main(data, table) {
    switch (table) {
        case 'card':
            break
        case 'template':
            for (const c of data) {
                await prisma.template.create({ data: c })
            }
            break
        default:
            throw new Error(`Unknown table: ${table}`)
    }
}

main(templateData, 'template')
