/*
  Warnings:

  - You are about to drop the column `address` on the `Locations` table. All the data in the column will be lost.
  - You are about to drop the column `roomId` on the `Locations` table. All the data in the column will be lost.
  - Added the required column `name` to the `Locations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Locations" DROP COLUMN "address",
DROP COLUMN "roomId",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "latitue" DROP NOT NULL,
ALTER COLUMN "longitude" DROP NOT NULL;
