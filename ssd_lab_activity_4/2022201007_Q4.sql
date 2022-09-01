USE `CUSTOMER_DB`;
DROP procedure IF EXISTS `cursor1`;

USE `CUSTOMER_DB`;
DROP procedure IF EXISTS `CUSTOMER_DB`.`cursor1`;
;

DELIMITER $$
USE `CUSTOMER_DB`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `cursor1`()
BEGIN
	DECLARE finished INTEGER DEFAULT 0;
	DECLARE name varchar(255);
    DECLARE city varchar(255);
    DECLARE country varchar(255);
    DECLARE grade int;
    
	DEClARE curCust 
		CURSOR FOR 
			SELECT CUST_NAME,CUST_CITY,CUST_COUNTRY,GRADE FROM customer WHERE AGENT_CODE like 'A00%';

	DECLARE CONTINUE HANDLER 
        FOR NOT FOUND SET finished = 1;

	OPEN curCust;

	getCust: LOOP
		FETCH curCust INTO name,city,country,grade;
        select name,city,country,grade as ' ';
		IF finished = 1 THEN 
			LEAVE getCust;
		END IF;
		
	END LOOP getCust;
	CLOSE curCust;
END$$

DELIMITER ;
;

