-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `Deliveries_clientsId_fkey`;

-- DropForeignKey
ALTER TABLE `deliveries` DROP FOREIGN KEY `Deliveries_deliverymanId_fkey`;

-- AlterTable
ALTER TABLE `deliveries` MODIFY `id_delivery` VARCHAR(191) NULL,
    MODIFY `clientsId` VARCHAR(191) NULL,
    MODIFY `deliverymanId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Deliveries` ADD CONSTRAINT `Deliveries_clientsId_fkey` FOREIGN KEY (`clientsId`) REFERENCES `clients`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Deliveries` ADD CONSTRAINT `Deliveries_deliverymanId_fkey` FOREIGN KEY (`deliverymanId`) REFERENCES `deliverymans`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
