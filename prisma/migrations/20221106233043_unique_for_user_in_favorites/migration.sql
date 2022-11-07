/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `rick_and_morties` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "rick_and_morties_userId_key" ON "rick_and_morties"("userId");
