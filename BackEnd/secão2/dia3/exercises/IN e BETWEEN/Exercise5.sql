SELECT title, rating FROM sakila.film
WHERE rating IN ("G", "PG", "PG-13")
ORDER BY title;