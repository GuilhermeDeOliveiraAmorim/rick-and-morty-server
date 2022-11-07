-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rick_and_morties" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "episode" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "id_api" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "is_your_favorite" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    CONSTRAINT "rick_and_morties_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_rick_and_morties" ("episode", "gender", "id", "id_api", "image", "location", "name", "origin", "species", "status", "type", "userId") SELECT "episode", "gender", "id", "id_api", "image", "location", "name", "origin", "species", "status", "type", "userId" FROM "rick_and_morties";
DROP TABLE "rick_and_morties";
ALTER TABLE "new_rick_and_morties" RENAME TO "rick_and_morties";
CREATE UNIQUE INDEX "rick_and_morties_userId_id_api_key" ON "rick_and_morties"("userId", "id_api");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
