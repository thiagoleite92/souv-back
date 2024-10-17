-- CreateTable
CREATE TABLE "table_items" (
    "id" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "unity" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "table_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "table_items_item_key" ON "table_items"("item");
