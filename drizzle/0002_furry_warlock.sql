CREATE TABLE `actionRateLimits` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`actionType` enum('listing','message','report','safety') NOT NULL,
	`windowStartedAt` timestamp NOT NULL,
	`actionCount` int NOT NULL DEFAULT 0,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `actionRateLimits_id` PRIMARY KEY(`id`),
	CONSTRAINT `action_rate_limits_user_action_unique` UNIQUE(`userId`,`actionType`)
);
--> statement-breakpoint
ALTER TABLE `userProfiles` ADD `accountStatus` enum('active','review','suspended') DEFAULT 'active' NOT NULL;--> statement-breakpoint
ALTER TABLE `actionRateLimits` ADD CONSTRAINT `actionRateLimits_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `action_rate_limits_window_idx` ON `actionRateLimits` (`windowStartedAt`);