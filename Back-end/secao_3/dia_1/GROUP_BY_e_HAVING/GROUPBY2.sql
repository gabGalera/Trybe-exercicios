SELECT store_id, active, COUNT(active) FROM sakila.customer
GROUP BY store_id, active
