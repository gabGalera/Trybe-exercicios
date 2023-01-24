(SELECT
	first_name
FROM 
	sakila.actor
ORDER BY
	first_name DESC
LIMIT 5)
UNION ALL
(SELECT
	first_name
FROM 
	sakila.staff
ORDER BY
	first_name
LIMIT 1)
UNION ALL
(SELECT
	first_name
FROM 
	sakila.customer
ORDER BY
	first_name
LIMIT 5
OFFSET 15
)
ORDER BY
	first_name





