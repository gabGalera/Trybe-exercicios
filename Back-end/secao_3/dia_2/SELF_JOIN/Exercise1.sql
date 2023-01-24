USE hr;

SELECT 
	CONCAT(e.first_name, ' ', e.last_name) AS 'employee_name',
    CONCAT(m.first_name, ' ', m.last_name) AS 'manager_name'
FROM 
	employees AS e
INNER JOIN
	employees AS m
ON 
	e.employee_id = m.manager_id
WHERE
	e.department_id <> m.department_id;