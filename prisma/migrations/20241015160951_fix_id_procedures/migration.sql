/*
  Warnings:

  - The primary key for the `procedure` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "procedure" DROP CONSTRAINT "procedure_pkey",
ALTER COLUMN "procedure_id" DROP DEFAULT,
ALTER COLUMN "procedure_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "procedure_pkey" PRIMARY KEY ("procedure_id");
DROP SEQUENCE "procedure_procedure_id_seq";
