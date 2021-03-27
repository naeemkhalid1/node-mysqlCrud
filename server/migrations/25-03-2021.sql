CREATE TABLE `curd_db`.`usersQueue` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hospital` VARCHAR(45) NOT NULL,
  `queueState` VARCHAR(45) NOT NULL DEFAULT 'in-waiting',
  `notes` VARCHAR(45) NULL,
  `priority` VARCHAR(45) NOT NULL DEFAULT 'low',
  `user` VARCHAR(45) NOT NULL,
  `date_added` datetime DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`));