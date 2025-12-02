/*
  Warnings:

  - You are about to drop the column `Date` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `prix` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Date",
DROP COLUMN "desc",
DROP COLUMN "prix",
DROP COLUMN "title",
ADD COLUMN     "category" TEXT,
ADD COLUMN     "color" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "engine" TEXT,
ADD COLUMN     "fuel" TEXT,
ADD COLUMN     "fuelCapacity" DOUBLE PRECISION,
ADD COLUMN     "mileage" DOUBLE PRECISION,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "power" TEXT,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "seats" INTEGER,
ADD COLUMN     "speed" TEXT,
ADD COLUMN     "transmission" TEXT,
ADD COLUMN     "year" INTEGER,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "image" DROP DEFAULT;
