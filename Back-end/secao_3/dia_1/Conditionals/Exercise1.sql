SELECT 
	film_id, 
    title, 
    IF(title='ACE GOLDFINGER', 'Já assisti esse filme.', 'Não conheço esse filme.') AS 'conheço o filme?'
FROM sakila.film;