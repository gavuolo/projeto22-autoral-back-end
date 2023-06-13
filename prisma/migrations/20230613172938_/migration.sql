-- DropForeignKey
ALTER TABLE "UserStaff" DROP CONSTRAINT "UserStaff_specialityId_fkey";

-- AlterTable
ALTER TABLE "UserStaff" ALTER COLUMN "specialityId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "UserStaff" ADD CONSTRAINT "UserStaff_specialityId_fkey" FOREIGN KEY ("specialityId") REFERENCES "Speciality"("id") ON DELETE SET NULL ON UPDATE CASCADE;
