SELECT rating, AVG(length) AS avg_duration FROM sakila.film
GROUP BY rating
ORDER BY avg_duration DESC