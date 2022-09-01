USE `CUSTOMER_DB`;
DROP procedure IF EXISTS `res`;

USE `CUSTOMER_DB`;
DROP procedure IF EXISTS `CUSTOMER_DB`.`res`;
;

DELIMITER $$
USE `CUSTOMER_DB`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `res`(IN `a` INT, IN `b` INT, out `sum` INT)
BEGIN
    set sum=a+b;
END$$
DELIMITER ;
