USE sakila;

SELECT
	CONCAT(c.first_name, ' ', c.last_name) AS `Name`,
    c.email,
    c.address_id,
    a.address,
    a.district
FROM
	customer AS c
INNER JOIN
	address AS a
ON
	a.address_id = c.address_id
WHERE
	a.district = 'California' AND
	'Name' LIKE '%rene%';
    