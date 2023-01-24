SELECT job_id, SUM(salary) 
FROM hr.employees
GROUP BY job_id;