-- CreateEnum
CREATE TYPE "Action" AS ENUM ('CONNECTTED', 'DISCONNECTED');

-- CreateTable
CREATE TABLE "connectionsStaff" (
    "connectionId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "action" "Action" NOT NULL,
    "staffId" TEXT NOT NULL,

    CONSTRAINT "connectionsStaff_pkey" PRIMARY KEY ("connectionId")
);

-- AddForeignKey
ALTER TABLE "connectionsStaff" ADD CONSTRAINT "connectionsStaff_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "Staff"("staffId") ON DELETE RESTRICT ON UPDATE CASCADE;
