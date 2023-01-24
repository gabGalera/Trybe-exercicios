SELECT 
	first_name, 
    last_name 
FROM sakila.customer
WHERE 
	first_name NOT LIKE '%tracy%'
UNION
SELECT 
	first_name, 
    last_name 
FROM sakila.actor
WHERE
	first_name NOT LIKE '%je%'