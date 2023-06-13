/*
  Warnings:

  - Made the column `specialityId` on table `UserStaff` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "UserStaff" DROP CONSTRAINT "UserStaff_specialityId_fkey";

-- AlterTable
ALTER TABLE "UserStaff" ALTER COLUMN "specialityId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "UserStaff" ADD CONSTRAINT "UserStaff_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "Speciality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
