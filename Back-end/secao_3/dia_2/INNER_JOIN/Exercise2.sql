USE sakila;

SELECT 
	s.first_name, 
    s.last_name, 
    a.address 
FROM staff AS s
INNER JOIN address AS a
ON a.address_id = s.address_id;