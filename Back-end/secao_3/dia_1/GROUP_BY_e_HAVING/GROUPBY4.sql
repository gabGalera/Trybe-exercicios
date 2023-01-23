SELECT district, COUNT(DISTINCT address) AS 'Number' FROM sakila.address
GROUP BY district
ORDER BY Number DESC