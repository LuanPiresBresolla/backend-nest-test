-- AlterTable
ALTER TABLE "users" ADD COLUMN     "assistant" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "logged" BOOLEAN NOT NULL DEFAULT false;
