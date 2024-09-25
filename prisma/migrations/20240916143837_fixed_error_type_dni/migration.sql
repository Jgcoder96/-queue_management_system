/*
  Warnings:

  - Changed the type of `dni` on the `Staff` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dni` on the `Users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Staff" DROP COLUMN "dni",
ADD COLUMN     "dni" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "dni",
ADD COLUMN     "dni" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Staff_dni_key" ON "Staff"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Users_dni_key" ON "Users"("dni");
