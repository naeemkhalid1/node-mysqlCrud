CREATE TABLE `curd_db`.`user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `disease` varchar(256) DEFAULT NULL,
  `age` int(11) NOT NULL,
  `gender` enum('male','female','other') NOT NULL DEFAULT 'other',
  `user_type` enum('patient') NOT NULL DEFAULT 'patient',
  `date_added` datetime DEFAULT NULL,
  `date_updated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
)