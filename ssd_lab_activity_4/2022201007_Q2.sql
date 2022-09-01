USE `CUSTOMER_DB`;
DROP procedure IF EXISTS `get_city`;

USE `CUSTOMER_DB`;
DROP procedure IF EXISTS `CUSTOMER_DB`.`get_city`;
;

DELIMITER $$
USE `CUSTOMER_DB`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_city`(IN `CITY` varchar(255))
BEGIN
	select CUST_NAME from customer where WORKING_AREA LIKE CITY;
END$$

DELIMITER ;
;
