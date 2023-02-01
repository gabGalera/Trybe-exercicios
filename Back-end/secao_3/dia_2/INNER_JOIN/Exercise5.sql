USE sakila;

SELECT
	c.first_name,
    c.last_name,
    COUNT(r.rental_id) AS Number_rents
FROM 
	customer AS c
INNER JOIN
	rental AS r
ON 
	c.customer_id = r.customer_id
WHERE 
	c.`active` = 1
GROUP BY
	c.customer_id
ORDER BY
	c.first_name DESC,
    c.last_name DESC

