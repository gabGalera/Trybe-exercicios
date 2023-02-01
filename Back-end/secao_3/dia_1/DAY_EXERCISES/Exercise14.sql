SELECT employee_id, first_name, CONCAT(DAY(hire_date), '°') 'hire_date' 
FROM hr.employees;