/*
  Warnings:

  - A unique constraint covering the columns `[cardUuid]` on the table `Card` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "cardUuid" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Card_cardUuid_key" ON "Card"("cardUuid");
