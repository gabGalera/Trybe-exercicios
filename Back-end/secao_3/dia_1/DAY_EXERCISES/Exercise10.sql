SELECT 
	AVG(salary) AS average_salary, 
    COUNT(employee_id) AS number_employee 
FROM hr.employees
GROUP BY department_id
HAVING number_employee > 10