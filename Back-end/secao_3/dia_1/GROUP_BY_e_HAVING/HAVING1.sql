SELECT rating, AVG(length) AS Average
FROM sakila.film
GROUP BY rating
HAVING Average > 115 AND Average < 121.5 
ORDER BY Average DESC