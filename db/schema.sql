CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `burgers` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) DEFAULT NULL,
  `devoured` tinyint(1) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

