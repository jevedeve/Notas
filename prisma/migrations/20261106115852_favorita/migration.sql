/*
  Warnings:

  - You are about to drop the column `creado` on the `Nota` table. All the data in the column will be lost.
  - You are about to drop the column `favorito` on the `Nota` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Nota" DROP COLUMN "creado",
DROP COLUMN "favorito",
ADD COLUMN     "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "favorita" BOOLEAN NOT NULL DEFAULT false;
