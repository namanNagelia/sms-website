-- CreateTable
CREATE TABLE `Match_Table_Phase1` (
    `Team1Team2Scores` VARCHAR(255) NULL,
    `Date` DATE NULL,
    `Team1` VARCHAR(255) NULL,
    `Team1LogoPic` VARCHAR(255) NULL,
    `Team1ShotChartUrl` VARCHAR(255) NULL,
    `Team2` VARCHAR(255) NULL,
    `Team2LogoPic` VARCHAR(255) NULL,
    `Team2ShotChartUrl` VARCHAR(255) NULL,
    `GameName` VARCHAR(255) NULL,
    `FinalScores` VARCHAR(255) NULL,
    `VideoLinkUrl` VARCHAR(255) NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Player_Roster_Phase1` (
    `SchoolNamePlayerJerseyNo` VARCHAR(255) NOT NULL,
    `SchoolName` VARCHAR(255) NULL,
    `PlayerJerseyNo` INTEGER NULL,
    `PlayerFirstName` VARCHAR(255) NULL,
    `PlayerLastName` VARCHAR(255) NULL,
    `Height` DECIMAL(5, 2) NULL,
    `YearOfGraduation` YEAR NULL,
    `Position` VARCHAR(50) NULL,
    `PlayerPictureURL` VARCHAR(255) NULL,

    PRIMARY KEY (`SchoolNamePlayerJerseyNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Player_Stats_Phase1` (
    `Team1Team1PlayerJerseyNumber` VARCHAR(255) NULL,
    `Team1` VARCHAR(255) NULL,
    `Team1PlayerJerseyNumber` INTEGER NULL,
    `Team2` VARCHAR(255) NULL,
    `Stats` TEXT NULL,
    `Action_Flag` VARCHAR(50) NULL,
    `Court_Position_X` DECIMAL(10, 2) NULL,
    `Court_Position_Y` DECIMAL(10, 2) NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `access_tokens` (
    `id` VARCHAR(255) NOT NULL,
    `userId` INTEGER UNSIGNED NULL,
    `revoked` BOOLEAN NULL DEFAULT false,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `expiresAt` TIMESTAMP(0) NULL,

    INDEX `access_tokens_userid_foreign`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `app_versions` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `minVersion` VARCHAR(255) NULL,
    `latestVersion` VARCHAR(255) NULL,
    `type` VARCHAR(255) NULL,
    `appLink` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL,
    `bundleId` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `basketball_active_player` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NULL,
    `playerId` BIGINT UNSIGNED NULL,
    `matchId` BIGINT UNSIGNED NULL,
    `teamId` BIGINT UNSIGNED NULL,
    `position` INTEGER NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `basketball_active_player_matchid_index`(`matchId`),
    INDEX `basketball_active_player_playerid_index`(`playerId`),
    INDEX `basketball_active_player_teamid_index`(`teamId`),
    INDEX `basketball_active_player_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `basketball_match` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NULL,
    `name` VARCHAR(255) NULL,
    `team1` BIGINT UNSIGNED NULL,
    `team2` BIGINT UNSIGNED NULL,
    `sport` VARCHAR(255) NULL,
    `matchDateTime` TIMESTAMP(0) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` VARCHAR(255) NULL,
    `matchSecond` INTEGER NULL,

    INDEX `basketball_match_team1_index`(`team1`),
    INDEX `basketball_match_team2_index`(`team2`),
    INDEX `basketball_match_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `basketball_players` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `teamId` BIGINT UNSIGNED NULL,
    `firstName` VARCHAR(255) NULL,
    `lastName` VARCHAR(255) NULL,
    `jerseyNumber` VARCHAR(255) NULL,
    `position` VARCHAR(255) NULL,
    `image` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `priority` VARCHAR(255) NULL,

    INDEX `basketball_players_teamid_index`(`teamId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `basketball_scoreboard` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NULL,
    `matchId` INTEGER UNSIGNED NULL,
    `teamId` BIGINT UNSIGNED NULL,
    `playerId` BIGINT UNSIGNED NULL,
    `position` VARCHAR(255) NULL,
    `score` INTEGER NULL,
    `attemptType` VARCHAR(255) NULL,
    `action` VARCHAR(255) NULL,
    `type` VARCHAR(255) NULL,
    `playerPositionX` VARCHAR(255) NULL,
    `playerPositionY` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `scoreTime` INTEGER NULL,

    INDEX `basketball_scoreboard_matchid_index`(`matchId`),
    INDEX `basketball_scoreboard_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `basketball_teams` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NULL,
    `name` VARCHAR(255) NULL,
    `logo` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `basketball_teams_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `connections` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NULL,
    `invitedUser` INTEGER UNSIGNED NULL,
    `status` INTEGER NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `connections_inviteduser_index`(`invitedUser`),
    INDEX `connections_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `delete_account_after_subscription_ends` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NOT NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `delete_account_after_subscription_ends_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `image` VARCHAR(255) NULL,
    `gameName` VARCHAR(255) NULL,
    `url` VARCHAR(255) NULL,
    `isdefault` INTEGER NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL,
    `date` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fcm_tokens` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NULL,
    `token` VARCHAR(255) NULL,
    `deviceId` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fcm_tokens_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_backup` (
    `id` INTEGER UNSIGNED NOT NULL DEFAULT 0,
    `name` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdby` INTEGER UNSIGNED NULL
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_members` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NULL,
    `groupId` INTEGER UNSIGNED NULL,
    `isAdmin` BOOLEAN NULL DEFAULT false,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `group_members_groupid_index`(`groupId`),
    INDEX `group_members_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `groups` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `createdby` INTEGER UNSIGNED NULL,

    INDEX `groups_createdby_index`(`createdby`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `intros` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `link` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `knex_migrations` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `batch` INTEGER NULL,
    `migration_time` TIMESTAMP(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `knex_migrations_lock` (
    `index` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `is_locked` INTEGER NULL,

    PRIMARY KEY (`index`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `library_media_comments` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `libraryMediaId` INTEGER UNSIGNED NOT NULL,
    `authorId` INTEGER UNSIGNED NOT NULL,
    `comment` TEXT NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `library_media_comments_authorid_index`(`authorId`),
    INDEX `library_media_comments_librarymediaid_index`(`libraryMediaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `library_medias` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NULL,
    `title` VARCHAR(255) NULL,
    `media` VARCHAR(255) NULL,
    `mediaType` INTEGER NULL,
    `mediaThumbnail` VARCHAR(255) NULL,
    `seconds` INTEGER NULL DEFAULT 0,
    `playlistId` INTEGER UNSIGNED NULL,
    `deletedAt` TIMESTAMP(0) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `description` TEXT NULL,
    `isEdited` BOOLEAN NULL DEFAULT false,
    `editedMediasJson` LONGTEXT NULL,

    INDEX `library_medias_playlistid_index`(`playlistId`),
    INDEX `library_medias_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `library_tags` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `libraryMediaId` INTEGER UNSIGNED NULL,
    `tagId` INTEGER UNSIGNED NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `library_tags_librarymediaid_index`(`libraryMediaId`),
    INDEX `library_tags_tagid_index`(`tagId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `media_weblinks` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `createdBy` INTEGER UNSIGNED NULL,
    `slug` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `media` VARCHAR(255) NULL,
    `mediaType` INTEGER NULL,
    `seconds` INTEGER NULL DEFAULT 0,
    `description` TEXT NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `media_weblinks_slug_unique`(`slug`),
    INDEX `media_weblinks_createdby_index`(`createdBy`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notifications` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NOT NULL,
    `authUserId` INTEGER UNSIGNED NOT NULL,
    `message` TEXT NULL,
    `notificationType` INTEGER NULL,
    `readAt` TIMESTAMP(0) NULL,
    `referenceId` INTEGER NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `notifications_authuserid_index`(`authUserId`),
    INDEX `notifications_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `password_resets` (
    `email` VARCHAR(255) NULL,
    `token` TEXT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playlist_tags` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `playlistId` INTEGER UNSIGNED NULL,
    `tagId` INTEGER UNSIGNED NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `playlist_tags_playlistid_index`(`playlistId`),
    INDEX `playlist_tags_tagid_index`(`tagId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playlists` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NULL,
    `name` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `playlists_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `productKey` VARCHAR(255) NULL,
    `title` VARCHAR(255) NULL,
    `price` DECIMAL(15, 2) NULL,
    `duration` INTEGER NULL DEFAULT 1,
    `currency` VARCHAR(255) NULL DEFAULT '$',
    `planType` ENUM('basic', 'pro') NULL,
    `platform` ENUM('Android', 'iOS') NULL,
    `isAllowRecordingAndUpload` BOOLEAN NULL DEFAULT false,
    `isAllowAutoRecord` BOOLEAN NULL DEFAULT false,
    `isAllowConnectAndShare` BOOLEAN NULL DEFAULT false,
    `isAllowEditTool` BOOLEAN NULL DEFAULT false,
    `isAllowToStitchClips` BOOLEAN NULL DEFAULT false,
    `isAllowToDownloadClips` BOOLEAN NULL DEFAULT false,
    `isAllowToShareOnSocialMedia` BOOLEAN NULL DEFAULT false,
    `isAllowPostureAnalysis` BOOLEAN NULL DEFAULT false,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `refresh_tokens` (
    `id` VARCHAR(255) NOT NULL,
    `accessTokenId` VARCHAR(255) NULL,
    `revoked` BOOLEAN NULL DEFAULT false,
    `expiresAt` TIMESTAMP(0) NULL,

    INDEX `refresh_tokens_accesstokenid_foreign`(`accessTokenId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shared_library_medias` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `libraryMediaId` INTEGER UNSIGNED NULL,
    `userId` INTEGER UNSIGNED NOT NULL,
    `groupId` INTEGER UNSIGNED NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `isAllowedToEditByOwner` BOOLEAN NULL DEFAULT false,

    INDEX `shared_library_medias_groupid_index`(`groupId`),
    INDEX `shared_library_medias_librarymediaid_index`(`libraryMediaId`),
    INDEX `shared_library_medias_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `shared_playlists` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `playlistId` INTEGER UNSIGNED NULL,
    `userId` INTEGER UNSIGNED NOT NULL,
    `groupId` INTEGER UNSIGNED NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `isAllowedToEditByOwner` BOOLEAN NULL DEFAULT false,

    INDEX `shared_playlists_groupid_index`(`groupId`),
    INDEX `shared_playlists_playlistid_index`(`playlistId`),
    INDEX `shared_playlists_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `showcases` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NULL,
    `image` VARCHAR(255) NULL,
    `gameName` VARCHAR(255) NULL,
    `url` VARCHAR(255) NULL,
    `type` ENUM('stats', 'video') NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL,
    `eventId` INTEGER UNSIGNED NULL,

    INDEX `showcases_eventid_index`(`eventId`),
    INDEX `showcases_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stitch_hist` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` INTEGER UNSIGNED NULL,
    `playlistId` INTEGER UNSIGNED NULL,
    `group_id` INTEGER UNSIGNED NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `stitch_status` VARCHAR(255) NULL,

    INDEX `stitch_hist_createdby_index`(`createdAt`, `stitch_status`),
    UNIQUE INDEX `stitch_hist_unique_userId_playlistId_group_id_index`(`userId`, `playlistId`, `group_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tags` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_subscriptions` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `productId` INTEGER UNSIGNED NULL,
    `userId` INTEGER UNSIGNED NULL,
    `purchaseToken` TEXT NULL,
    `orderId` VARCHAR(255) NULL,
    `originalTransactionId` VARCHAR(255) NULL,
    `purchasedAt` TIMESTAMP(0) NULL,
    `expireAt` TIMESTAMP(0) NULL,
    `purchaseState` VARCHAR(255) NULL,
    `autoRenewing` VARCHAR(255) NULL,
    `isTrial` BOOLEAN NULL DEFAULT true,
    `receipt` JSON NULL,
    `isTestEnvironment` BOOLEAN NULL,
    `cancelledAt` TIMESTAMP(0) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `user_subscriptions_productid_index`(`productId`),
    INDEX `user_subscriptions_userid_index`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NULL,
    `phone` VARCHAR(255) NULL,
    `password` VARCHAR(255) NULL,
    `emailVerifiedAt` TIMESTAMP(0) NULL,
    `firstName` VARCHAR(255) NULL,
    `lastName` VARCHAR(255) NULL,
    `profilePicture` VARCHAR(255) NULL,
    `aboutMe` VARCHAR(255) NULL,
    `backgroundMedia` VARCHAR(1000) NULL,
    `backgroundMediaType` INTEGER NULL,
    `backgroundMediaThumbnail` VARCHAR(1000) NULL,
    `socialEmail` VARCHAR(255) NULL,
    `providerType` VARCHAR(255) NULL,
    `providerId` VARCHAR(255) NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL,
    `lastAppAccessTime` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `skillteckUserId` INTEGER NULL,
    `isShowSubscriptionPopUp` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `users_email_unique`(`email`),
    UNIQUE INDEX `users_phone_unique`(`phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `access_tokens` ADD CONSTRAINT `access_tokens_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `basketball_active_player` ADD CONSTRAINT `basketball_active_player_matchid_foreign` FOREIGN KEY (`matchId`) REFERENCES `basketball_match`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `basketball_active_player` ADD CONSTRAINT `basketball_active_player_playerid_foreign` FOREIGN KEY (`playerId`) REFERENCES `basketball_players`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `basketball_active_player` ADD CONSTRAINT `basketball_active_player_teamid_foreign` FOREIGN KEY (`teamId`) REFERENCES `basketball_teams`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `basketball_active_player` ADD CONSTRAINT `basketball_active_player_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `basketball_match` ADD CONSTRAINT `basketball_match_team1_foreign` FOREIGN KEY (`team1`) REFERENCES `basketball_teams`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `basketball_match` ADD CONSTRAINT `basketball_match_team2_foreign` FOREIGN KEY (`team2`) REFERENCES `basketball_teams`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `basketball_match` ADD CONSTRAINT `basketball_match_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `basketball_players` ADD CONSTRAINT `basketball_players_teamid_foreign` FOREIGN KEY (`teamId`) REFERENCES `basketball_teams`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `basketball_scoreboard` ADD CONSTRAINT `basketball_scoreboard_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `basketball_teams` ADD CONSTRAINT `basketball_teams_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `connections` ADD CONSTRAINT `connections_inviteduser_foreign` FOREIGN KEY (`invitedUser`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `connections` ADD CONSTRAINT `connections_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `delete_account_after_subscription_ends` ADD CONSTRAINT `delete_account_after_subscription_ends_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `fcm_tokens` ADD CONSTRAINT `fcm_tokens_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `group_members` ADD CONSTRAINT `group_members_groupid_foreign` FOREIGN KEY (`groupId`) REFERENCES `groups`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `group_members` ADD CONSTRAINT `group_members_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `groups` ADD CONSTRAINT `groups_createdby_foreign` FOREIGN KEY (`createdby`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `library_media_comments` ADD CONSTRAINT `library_media_comments_authorid_foreign` FOREIGN KEY (`authorId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `library_media_comments` ADD CONSTRAINT `library_media_comments_librarymediaid_foreign` FOREIGN KEY (`libraryMediaId`) REFERENCES `library_medias`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `library_medias` ADD CONSTRAINT `library_medias_playlistid_foreign` FOREIGN KEY (`playlistId`) REFERENCES `playlists`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `library_medias` ADD CONSTRAINT `library_medias_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `library_tags` ADD CONSTRAINT `library_tags_librarymediaid_foreign` FOREIGN KEY (`libraryMediaId`) REFERENCES `library_medias`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `library_tags` ADD CONSTRAINT `library_tags_tagid_foreign` FOREIGN KEY (`tagId`) REFERENCES `tags`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `media_weblinks` ADD CONSTRAINT `media_weblinks_createdby_foreign` FOREIGN KEY (`createdBy`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_authuserid_foreign` FOREIGN KEY (`authUserId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `playlist_tags` ADD CONSTRAINT `playlist_tags_playlistid_foreign` FOREIGN KEY (`playlistId`) REFERENCES `playlists`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `playlist_tags` ADD CONSTRAINT `playlist_tags_tagid_foreign` FOREIGN KEY (`tagId`) REFERENCES `tags`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `playlists` ADD CONSTRAINT `playlists_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `refresh_tokens` ADD CONSTRAINT `refresh_tokens_accesstokenid_foreign` FOREIGN KEY (`accessTokenId`) REFERENCES `access_tokens`(`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `shared_library_medias` ADD CONSTRAINT `shared_library_medias_groupid_foreign` FOREIGN KEY (`groupId`) REFERENCES `groups`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `shared_library_medias` ADD CONSTRAINT `shared_library_medias_librarymediaid_foreign` FOREIGN KEY (`libraryMediaId`) REFERENCES `library_medias`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `shared_library_medias` ADD CONSTRAINT `shared_library_medias_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `shared_playlists` ADD CONSTRAINT `shared_playlists_groupid_foreign` FOREIGN KEY (`groupId`) REFERENCES `groups`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `shared_playlists` ADD CONSTRAINT `shared_playlists_playlistid_foreign` FOREIGN KEY (`playlistId`) REFERENCES `playlists`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `shared_playlists` ADD CONSTRAINT `shared_playlists_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `showcases` ADD CONSTRAINT `showcases_eventid_foreign` FOREIGN KEY (`eventId`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `showcases` ADD CONSTRAINT `showcases_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_subscriptions` ADD CONSTRAINT `user_subscriptions_productid_foreign` FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `user_subscriptions` ADD CONSTRAINT `user_subscriptions_userid_foreign` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

