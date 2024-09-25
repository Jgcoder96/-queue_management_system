-- DropForeignKey
ALTER TABLE "procedure" DROP CONSTRAINT "procedure_staff_id_fkey";

-- AlterTable
ALTER TABLE "procedure" ALTER COLUMN "staff_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "procedure" ADD CONSTRAINT "procedure_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "users"("user_id") ON DELETE SET NULL ON UPDATE CASCADE;
