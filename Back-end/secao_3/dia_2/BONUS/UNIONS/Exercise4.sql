(SELECT
	first_name,
    last_name
FROM sakila.customer)
UNION
(SELECT
	first_name,
    last_name
FROM sakila.customer)
ORDER BY
	first_name,
    last_name
LIMIT 15
OFFSET 60