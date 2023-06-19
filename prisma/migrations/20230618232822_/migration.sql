/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `createdById` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Made the column `rg` on table `Patient` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_createdBy_fkey";

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "createdBy",
ADD COLUMN     "createdById" INTEGER NOT NULL,
ALTER COLUMN "rg" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
