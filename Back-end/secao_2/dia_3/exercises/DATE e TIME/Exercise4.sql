SELECT * FROM sakila.payment
WHERE DATE(payment_date) = "2005-07-28" AND HOUR(payment_date) >= 22;