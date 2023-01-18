SELECT COUNT(DISTINCT payment_id) FROM sakila.payment
WHERE DATE(payment_date) BETWEEN "2005-05-01" AND "2005-08-01";