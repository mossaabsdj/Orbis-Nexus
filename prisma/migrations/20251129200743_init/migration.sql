/*
  Warnings:

  - You are about to drop the column `country` on the `Compte` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Compte` table. All the data in the column will be lost.
  - You are about to drop the column `fullName` on the `Compte` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Compte` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Compte` table. All the data in the column will be lost.
  - You are about to drop the `Commande` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[Username]` on the table `Compte` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Username` to the `Compte` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Commande" DROP CONSTRAINT "Commande_compteId_fkey";

-- DropForeignKey
ALTER TABLE "Commande" DROP CONSTRAINT "Commande_productId_fkey";

-- DropIndex
DROP INDEX "Compte_email_key";

-- AlterTable
ALTER TABLE "Compte" DROP COLUMN "country",
DROP COLUMN "email",
DROP COLUMN "fullName",
DROP COLUMN "phone",
DROP COLUMN "role",
ADD COLUMN     "Username" TEXT NOT NULL;

-- DropTable
DROP TABLE "Commande";

-- DropEnum
DROP TYPE "Role";

-- CreateIndex
CREATE UNIQUE INDEX "Compte_Username_key" ON "Compte"("Username");
