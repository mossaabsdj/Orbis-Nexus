/*
  Warnings:

  - You are about to drop the column `emballage` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `farmId` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "emballage",
DROP COLUMN "farmId";
