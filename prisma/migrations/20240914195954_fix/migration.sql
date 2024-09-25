/*
  Warnings:

  - The values [USER] on the enum `Roles` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `isConnected` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dni]` on the table `Staff` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Staff` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[dni]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `isConnected` to the `Staff` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Roles_new" AS ENUM ('ADMIN', 'MODERATOR');
ALTER TABLE "Staff" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "Staff" ALTER COLUMN "role" TYPE "Roles_new" USING ("role"::text::"Roles_new");
ALTER TYPE "Roles" RENAME TO "Roles_old";
ALTER TYPE "Roles_new" RENAME TO "Roles";
DROP TYPE "Roles_old";
COMMIT;

-- AlterTable
ALTER TABLE "Staff" ADD COLUMN     "isConnected" BOOLEAN NOT NULL,
ALTER COLUMN "role" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "isConnected";

-- CreateIndex
CREATE UNIQUE INDEX "Staff_dni_key" ON "Staff"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_email_key" ON "Staff"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_dni_key" ON "Users"("dni");
