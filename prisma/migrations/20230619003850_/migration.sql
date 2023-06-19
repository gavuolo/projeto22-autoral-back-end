/*
  Warnings:

  - You are about to drop the column `createdById` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `userCreateId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userCreateId` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "userCreateId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "createdById",
ADD COLUMN     "userCreateId" INTEGER NOT NULL;
