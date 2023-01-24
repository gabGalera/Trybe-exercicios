USE sakila;

SELECT
	s.first_name,
    s.last_name,
    AVG(p.amount) AS average_amount
FROM 
	staff AS s
INNER JOIN 
	payment AS p
ON
	s.staff_id = p.staff_id
WHERE
	YEAR(p.payment_date) = '2006'
GROUP BY
	s.first_name, s.last_name