SELECT job_id, AVG(salary) AS average_salary
FROM hr.employees
GROUP BY job_id
HAVING job_id != 'it_prog'
ORDER BY average_salary DESC