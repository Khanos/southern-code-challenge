ALTER TABLE "comments" ALTER COLUMN "id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "comments" ALTER COLUMN "productId" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "comments" ALTER COLUMN "productId" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "id" SET DATA TYPE integer;