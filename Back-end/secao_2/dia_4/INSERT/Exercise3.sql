INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name 
		FROM sakila.customer
		LIMIT 5;