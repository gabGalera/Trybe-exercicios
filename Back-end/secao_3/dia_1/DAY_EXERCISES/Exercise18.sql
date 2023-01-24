SELECT 
	first_name, 
    last_name, 
    DATEDIFF(CURRENT_DATE(), hire_date) 'days_working'
FROM hr.employees;