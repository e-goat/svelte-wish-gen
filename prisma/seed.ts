import { PrismaClient, Prisma } from "$lib/db";

export const prisma = new PrismaClient();

function randomBase64(length: number): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  while (result.length % 4 !== 0) {
    result += "=";
  }
  return result;
}

const cardData: Prisma.CardCreateInput[] = [
  {
    name: "Alice",
    base64: randomBase64(88),
    cardType: "birthday",
    description: "Alice is a software engineer with a passion for open source.",
    slug: "alice-wish-card",
  },
  {
    name: "Bob",
    base64: randomBase64(88),
    cardType: "thank-you",
    description: "Bob is a data scientist who loves to analyze large datasets.",
    slug: "bob-wish-card",
  },
];

export async function main() {
  for (const c of cardData) {
    await prisma.card.create({ data: c });
  }
}

main();
