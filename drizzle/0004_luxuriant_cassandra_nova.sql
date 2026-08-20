ALTER TABLE `profileMedia` ADD `visibility` enum('public','hidden') DEFAULT 'public' NOT NULL;--> statement-breakpoint
ALTER TABLE `profileMedia` ADD `isFeatured` boolean DEFAULT false NOT NULL;