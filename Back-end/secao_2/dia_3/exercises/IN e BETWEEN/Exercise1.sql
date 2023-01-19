SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ("hicks", "crawford", "henry", "boyd", "mason", "morales", "kennedy")
ORDER BY first_name ASC;