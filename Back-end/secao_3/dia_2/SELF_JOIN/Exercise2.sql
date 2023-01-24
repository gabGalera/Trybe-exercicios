USE hr;

SELECT 
	COUNT(*) AS 'total_employees',
    CONCAT(m.first_name, ' ', m.last_name) AS 'name'
FROM 
	employees AS e
INNER JOIN
	employees AS m
ON 
	e.employee_id = m.manager_id
GROUP BY
	m.employee_id;