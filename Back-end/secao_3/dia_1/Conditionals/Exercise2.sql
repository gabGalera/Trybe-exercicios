SELECT 
	title,
    rating,
	CASE
		WHEN 'G' THEN 'Livre para todos'
        WHEN 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN 'PG-13' THEN 'Não recomandad0 para menores de 10 anos'
        WHEN 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
	END	AS 'público-alvo'
FROM sakila.film;