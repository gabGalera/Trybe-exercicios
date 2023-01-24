SELECT rating, SUM(replacement_cost) AS Total_replacement_cost
FROM sakila.film
GROUP by rating
HAVING Total_replacement_cost > 3950.50
ORDER BY Total_replacement_cos