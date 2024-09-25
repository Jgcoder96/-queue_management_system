/*
  Warnings:

  - You are about to drop the `Procedure` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Staff` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `connectionsStaff` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "Roles" ADD VALUE 'USERS';

-- DropForeignKey
ALTER TABLE "Procedure" DROP CONSTRAINT "Procedure_staffId_fkey";

-- DropForeignKey
ALTER TABLE "Procedure" DROP CONSTRAINT "Procedure_userId_fkey";

-- DropForeignKey
ALTER TABLE "connectionsStaff" DROP CONSTRAINT "connectionsStaff_staffId_fkey";

-- DropTable
DROP TABLE "Procedure";

-- DropTable
DROP TABLE "Staff";

-- DropTable
DROP TABLE "Users";

-- DropTable
DROP TABLE "connectionsStaff";

-- DropEnum
DROP TYPE "Action";

-- DropEnum
DROP TYPE "StatusProcedure";

-- CreateTable
CREATE TABLE "users" (
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "dni" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "rol" "Roles" NOT NULL,
    "is_connected" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "procedure" (
    "procedure_id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "is_attended" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finished_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "staff_id" TEXT NOT NULL,

    CONSTRAINT "procedure_pkey" PRIMARY KEY ("procedure_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_dni_key" ON "users"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "procedure" ADD CONSTRAINT "procedure_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "procedure" ADD CONSTRAINT "procedure_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
