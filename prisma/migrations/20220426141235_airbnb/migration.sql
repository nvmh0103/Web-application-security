/*
  Warnings:

  - Changed the type of `type` on the `Medias` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "MediaTypes" AS ENUM ('Thumbnail', 'Image');

-- AlterTable
ALTER TABLE "Medias" DROP COLUMN "type",
ADD COLUMN     "type" "MediaTypes" NOT NULL;
