/*
  Warnings:

  - You are about to drop the column `latitue` on the `Locations` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Locations" DROP COLUMN "latitue",
ADD COLUMN     "latitude" DOUBLE PRECISION;