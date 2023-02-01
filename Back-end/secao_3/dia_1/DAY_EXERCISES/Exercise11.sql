SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES = 1;