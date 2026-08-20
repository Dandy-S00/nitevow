CREATE TABLE `profileMedia` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`storageKey` varchar(512) NOT NULL,
	`url` varchar(768) NOT NULL,
	`mediaType` enum('image','video') NOT NULL,
	`mimeType` varchar(80) NOT NULL,
	`caption` varchar(180),
	`sortOrder` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `profileMedia_id` PRIMARY KEY(`id`),
	CONSTRAINT `profileMedia_storageKey_unique` UNIQUE(`storageKey`)
);
--> statement-breakpoint
ALTER TABLE `profileMedia` ADD CONSTRAINT `profileMedia_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `profile_media_user_idx` ON `profileMedia` (`userId`,`sortOrder`,`createdAt`);