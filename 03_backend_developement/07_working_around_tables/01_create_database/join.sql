/* Write a query in SQL to display the first name, last name, department number, and department name for each employee.*/
SELECT first_name, last_name, department_id, name
FROM employee INNER JOIN department ON department_id = department.id

/* Write a query in SQL to display the first and last name, department, city, and state province for each employee.*/
SELECT first_name, last_name, name, city, state
FROM employee
  INNER JOIN department ON department_id = department.id
  INNER JOIN location ON location_id = location.id;

/* Write a query in SQL to display the first name, last name, salary, and job grade for all employees.*/
SELECT first_name, last_name, salary, level
FROM employee INNER JOIN job_grade ON salary BETWEEN lowest_salary AND highest_salary;

/* Write a query in SQL to display the first name, last name, department number and department name, for all employees for departments 8 or 4.*/
SELECT first_name, last_name, department_id, name
FROM employee INNER JOIN department ON department_id = department.id
WHERE department_id IN (8, 4);

/* Write a query in SQL to display those employees who contain a letter z to their first name and also display their last name, department, city, and state province.*/
SELECT first_name, last_name, name, city, state
FROM employee
  INNER JOIN department ON department_id = department.id
  INNER JOIN location ON location_id = location.id
WHERE first_name LIKE '%z%';

/* Write a query in SQL to display all departments including those where does not have any employee.*/
SELECT name, count(employee.id)
 FROM department LEFT JOIN employee ON department.id = department_id
 GROUP BY name;

/* Write a query in SQL to display the first and last name and salary for those employees who earn less than the employee earn whose number is 83.*/
SELECT e.first_name, e.last_name, e.salary
FROM employee e INNER JOIN employee r ON e.salary > r.salary
WHERE r.id = 83;

/* Write a query in SQL to display the first name of all employees including the first name of their manager.*/
SELECT e.first_name, m.first_name
FROM employee e INNER JOIN employee m ON e.manager_id = m.id;

/* Write a query in SQL to display the department name, city, and state province for each department.*/
SELECT first_name, last_name, name, city, state
FROM employee
  INNER JOIN department ON department_id = department.id
  INNER JOIN location ON location_id = location.id
WHERE first_name LIKE '%z%';

/* Write a query in SQL to display the first name, last name, department number and name, for all employees who have or have not any department.*/
SELECT first_name, last_name, department_id, name
FROM employee LEFT JOIN department ON department_id = department.id;

/* Write a query in SQL to display the first name of all employees and the first name of their manager including those who does not working under any manager.*/
SELECT e.first_name, m.first_name
FROM employee e LEFT JOIN employee m ON e.manager_id = m.id;

/* Write a query in SQL to display the first name, last name, and department number for those employees who work in the same department as the employee who hold the last name as Taylor.*/
SELECT e.first_name, e.last_name, e.department_id
FROM employee e INNER JOIN employee r ON e.department_id = r.department_id
WHERE r.last_name = 'Taylor';

/* Write a query in SQL to display the job title, department name, full name (first and last name ) of employee, and starting date for all the jobs which started on or after 1st January, 1993 and ending with on or before 31 August, 1997.*/
SELECT job.title, department.name, CONCAT(first_name, ' ', last_name) full_name, hire_date
FROM employee
  INNER JOIN department ON department_id = department.id
  INNER JOIN job ON job_id = job.id
  INNER JOIN job_history ON employee.id = job_history.employee_id
WHERE start_date >= '2003-01-01' AND end_date <= '2007-08-31';

/* Write a query in SQL to display job title, full name (first and last name ) of employee, and the difference between maximum salary for the job and salary of the employee.*/
SELECT job.title, CONCAT(first_name, ' ', last_name) full_name, max_salary - salary AS gap
FROM employee INNER JOIN job ON job_id = job.id;

/* Write a query in SQL to display the name of the department, average salary and number of employees working in that department who got commission.*/
SELECT name, ROUND(AVG(salary), 0) average_salary, COUNT(employee.id) employee_number
FROM department INNER JOIN employee ON department.id = department_id
GROUP BY name;

/* Write a query in SQL to display the full name (first and last name ) of employee, and job title of those employees who is working in the department which ID is 8.*/
SELECT CONCAT(first_name, ' ', last_name) full_name, job.title
FROM employee
  INNER JOIN job ON job_id = job.id
WHERE department_id = 8;

/* Write a query in SQL to display the name of the country, city, and the departments which are running there.*/
SELECT country.name, location.city, department.name
 FROM country
  INNER JOIN location ON country.id = country_id
  INNER JOIN department ON location.id = location_id;

/* Write a query in SQL to display department name and the full name (first and last name) of the manager.*/
SELECT d.name, CONCAT(m.first_name, ' ', m.last_name) full_name
 FROM employee e
  INNER JOIN employee m ON e.manager_id = m.id
  INNER JOIN department d ON d.id = m.department_id
 GROUP BY d.name, full_name;

/* Write a query in SQL to display job title and average salary of employees.*/
SELECT job.title, ROUND(AVG(salary), 0) average_salary
FROM job INNER JOIN employee ON job.id = job_id
GROUP BY title;

/* Write a query in SQL to display the details of jobs which was done by any of the employees who is presently earning a salary on and above 12000.*/
SELECT DISTINCT job.*
FROM job INNER JOIN employee ON job.id = employee.job_id
WHERE salary >= 12000;

/* Write a query in SQL to display the department name, full name (first and last name) of manager, and their city.*/
SELECT DISTINCT d.name, CONCAT(m.first_name, ' ', m.last_name) full_name, city
 FROM employee e
  INNER JOIN employee m ON e.manager_id = m.id
  INNER JOIN department d ON d.id = m.department_id
  INNER JOIN location ON location.id = location_id

/* Write a query in SQL to display the employee ID, job name, number of days worked in for all those jobs in department 8.*/
SELECT employee.id, job.title, SUM(end_date - start_date) nb_days
FROM employee
  INNER JOIN job ON job_id = job.id
  INNER JOIN job_history ON employee.id = job_history.employee_id AND job_history.department_id = employee.department_id
WHERE employee.department_id = 8
GROUP BY employee.id, job.title;

/* Write a query in SQL to display the full name (first and last name), and salary of those employees who working in any department located in London.*/
SELECT CONCAT(m.first_name, ' ', m.last_name) full_name, salary
 FROM employee e
  INNER JOIN department d ON d.id = m.department_id
  INNER JOIN location ON location.id = location_id
WHERE city = 'London';

/* Write a query in SQL to display full name(first and last name), job title, starting and ending date of last jobs for those employees with worked without a commission percentage.*/
SELECT CONCAT(first_name, ' ', last_name) full_name, job.title, start_date, end_date
FROM employee
 INNER JOIN job ON job.id = job_id
 INNER JOIN job_history ON employee.id = job_history.employee_id
WHERE commission_pct = 0;

/* Write a query in SQL to display the department name and number of employees in each of the department.*/
SELECT d.name, COUNT(e.id)
FROM department d LEFT JOIN employee e ON d.id = department_id
GROUP BY d.name;

/* Write a query in SQL to display the full name (fisrt and last name ) of employee with ID and name of the country presently where (s)he is working.*/
SELECT CONCAT(e.first_name, ' ', e.last_name) full_name, c.id, c.name
FROM employee e
  INNER JOIN department d ON d.id = e.department_id
  INNER JOIN location l ON l.id = d.location_id
  INNER JOIN country c ON c.id = l.country_id
