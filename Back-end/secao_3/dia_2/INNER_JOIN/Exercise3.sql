USE sakila;

SELECT 
	c.customer_id,  
	CONCAT(c.first_name, ' ', c.last_name) AS 'Name',
    c.email,
    c.address_id,
    a.address
FROM customer AS c
INNER JOIN address AS a
ON a.address_id = c.address_id
ORDER BY `Name` DESC
LIMIT 100;
