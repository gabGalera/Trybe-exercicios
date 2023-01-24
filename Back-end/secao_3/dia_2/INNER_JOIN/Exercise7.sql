USE sakila;

SELECT
	a.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS 'Name',
    fa.film_id,
    f.title
FROM
	actor AS a
INNER JOIN
	film_actor AS fa
ON
	a.actor_id = fa.actor_id
INNER JOIN
	film AS f
ON 
	fa.film_id = f.film_id;
    

