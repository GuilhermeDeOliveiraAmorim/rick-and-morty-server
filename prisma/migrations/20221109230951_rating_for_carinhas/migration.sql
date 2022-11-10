-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rick_and_morties" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "episode" INTEGER NOT NULL,
    "gender" TEXT,
    "id_api" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT,
    "name" TEXT NOT NULL,
    "origin" TEXT,
    "species" TEXT,
    "status" TEXT,
    "type" TEXT,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "is_your_favorite" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    CONSTRAINT "rick_and_morties_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_rick_and_morties" ("episode", "gender", "id", "id_api", "image", "is_your_favorite", "location", "name", "origin", "species", "status", "type", "userId") SELECT "episode", "gender", "id", "id_api", "image", "is_your_favorite", "location", "name", "origin", "species", "status", "type", "userId" FROM "rick_and_morties";
DROP TABLE "rick_and_morties";
ALTER TABLE "new_rick_and_morties" RENAME TO "rick_and_morties";
CREATE UNIQUE INDEX "rick_and_morties_userId_id_api_key" ON "rick_and_morties"("userId", "id_api");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
