-- CreateTable
CREATE TABLE "Idea" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "opps" BOOLEAN NOT NULL,
    "product" TEXT NOT NULL,
    "system" TEXT NOT NULL,
    "partNum" TEXT NOT NULL,
    "vendor" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "author" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "plannedStart" DATETIME NOT NULL,
    "plannedEnd" DATETIME NOT NULL,
    "finish" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
