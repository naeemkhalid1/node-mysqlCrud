CREATE TABLE `curd_db`.`hospital` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `admin` VARCHAR(255) NOT NULL,
  `hospital` VARCHAR(255) NOT NULL,
  `email` NVARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `latitude` FLOAT NULL DEFAULT NULL,
  `longitude` FLOAT NULL DEFAULT NULL,
  `date_added` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`));
