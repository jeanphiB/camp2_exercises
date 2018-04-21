/* Write a query in SQL to display the full name (first and last name), and salary for those employees who earn below 6000. */
SELECT first_name, last_name, salary FROM employee WHERE salary < 6000;

/* Write a query in SQL to display the first and last_name, department number and salary for those employees who earn more than 8000. */
SELECT first_name, last_name, department_id, salary FROM employee WHERE salary > 8000;

/* Write a query in SQL to display the first and last name, and department number for all employees whose last name is "McEwen". */
SELECT first_name, last_name, department_id FROM employee WHERE last_name = 'McEwen';

/* Write a query in SQL to display all the information for all employees without any department number. */
SELECT * FROM employee WHERE department_id = 0;

/* Write a query in SQL to display all the information about the department Marketing. */
SELECT * FROM department WHERE name = 'Marketing';

/* Write a query in SQL to display the full name (first and last), hire date, salary, and department number for those employees whose first name does not containing the letter M and make the result set in ascending order by department number. */
SELECT first_name, last_name, hire_date, salary, department_id FROM employee
 WHERE first_name NOT LIKE '%M%' ORDER BY department_id;

/* Write a query in SQL to display all the information of employees whose salary is in the range of 8000 and 12000 and commission is not null or department number is except the number 4, 12 and 7 and they have been hired before June 5th, 1987. */
SELECT * FROM employee
 WHERE ((salary BETWEEN 8000 AND 12000) AND commission_pct = 0)
  OR (department_id IN (4, 12, 7) AND hire_date < '2005-06-05');

/* Write a query in SQL to display the full name (first and last name), and salary for all employees who does not earn any commission. */
SELECT first_name, last_name, salary
 FROM employee
 WHERE commission_pct = 0;

/* Write a query in SQL to display the full name (first and last), the phone number and email separated by hyphen, and salary, for those employees whose salary is within the range of 9000 and 17000. The column headings assign with Full_Name, Contact_Details and Remuneration respectively. */
SELECT CONCAT(first_name, ' ', last_name) AS Full_Name, CONCAT(phone_number, '-', email) AS Contact_Details, salary AS Remuneration
 FROM employee
 WHERE salary BETWEEN 9000 AND 17000;

/* Write a query in SQL to display the first and last name, and salary for those employees whose first name is ending with the letter m. */
SELECT first_name, last_name, salary
 FROM employee
 WHERE first_name LIKE '%m';

/* Write a query in SQL to display the full name (first and last) name, and salary, for all employees whose salary is out of the range 7000 and 15000 and make the result set in ascending order by the full name. */
SELECT CONCAT(first_name, ' ', last_name) AS Full_Name, salary
 FROM employee
 WHERE salary NOT BETWEEN 7000 AND 15000
 ORDER BY Full_Name;

/* Write a query in SQL to display the full name (first and last), job id and date of hire for those employees who was hired during November 5th, 2007 and July 5th, 2009. */
SELECT CONCAT(first_name, ' ', last_name) AS Full_Name, job_id, hire_date
 FROM employee
 WHERE hire_date BETWEEN 2007-11-05 AND 2009-07-05;

/* Write a query in SQL to display the the full name (first and last name), and department number for those employees who works either in department 7 or 9. */
SELECT CONCAT(first_name, ' ', last_name) AS Full_Name, department_id, hire_date
 FROM employee
 WHERE department_id IN (7, 9);

/* Write a query in SQL to display the full name (first and last name), salary, and manager number for those employees who is working under a manager. */
SELECT CONCAT(first_name, ' ', last_name) AS Full_Name, salary, manager_id
 FROM employee
 WHERE manager_id <> 0;

/* Write a query in SQL to display all the information from Employees table for those employees who was hired before June 21st, 2002. */
SELECT * FROM employee
 WHERE hire_date < '2012-06-21';

/* Write a query in SQL to display the first and last name, email, salary and manager ID, for those employees whose managers are hold the ID 21, 4 or 46. */
SELECT first_name, last_name, email, salary, manager_id
 FROM employee
 WHERE manager_id IN (21, 4, 46);

/* Write a query in SQL
 to display all the information for all employees who have the letters D, S, or N in their first name and also arrange the result in descending order by salary. */
SELECT * FROM employee
 WHERE first_name LIKE ANY (ARRAY['%D%', '%S%', ''])

/* Write a query in SQL to display the full name (first name and last name), hire date, commission percentage, email and telephone separated by '-', and salary for those employees who earn the salary above 11000 or the seventh digit in their phone number equals 3 and make the result set in a descending order by the first name. */
SELECT CONCAT(first_name, ' ', last_name) AS Full_Name, hire_date, commission_pct, CONCAT(email, '-', phone_number) AS Contact_Details, salary
 FROM employee
 WHERE salary > 11000 OR SUBSTRING(phone_number FROM 7 FOR 1) = '3'
 ORDER BY first_name;

/* Write a query in SQL to display the first and last name, and department number for those employees who holds a letter s as a 3rd character in their first name. */
SELECT first_name, last_name, department_id
 FROM employee
 WHERE SUBSTRING(first_name FROM 3 FOR 1) = 's';

/* Write a query in SQL to display the employee ID, first name, job id, and department number for those employees who is working except the departments 5, 3 and 8. */
SELECT id, first_name, job_id, department_id
FROM employee
WHERE department_id NOT IN (5, 3, 8);

/* Write a query in SQL to display the employee Id, first name, job id, and department number for those employees whose department number equals 3, 4 or 9. */
SELECT id, first_name, job_id, department_id
FROM employee
WHERE department_id IN (3, 4, 9);

/* Write a query in SQL to display the ID for those employees who did two or more jobs in the past. */
SELECT G.employee_id
FROM (SELECT employee_id, COUNT(1) NB FROM job_history GROUP BY employee_id) AS G
WHERE NB > 1;

/* Write a query in SQL to display job ID, number of employees, sum of salary, and difference between highest salary and lowest salary for a job. */
SELECT job_id, COUNT(1) AS nb, SUM(salary) AS sum, MAX(salary) - MIN(salary) AS delta
FROM employee
GROUP BY job_id

/* Write a query in SQL to display job ID for those jobs that were done by two or more for more than 300 days. */
SELECT job_id
 FROM (SELECT job_id, COUNT(1) AS nb_employee
 FROM employee
 WHERE DATE_PART('day', NOW() - hire_date) > 300
 GROUP BY job_id) AS G
 WHERE G.nb_employee > 1;

/* Write a query in SQL to display the country ID and number of cities in that country we have. */
SELECT country_id, COUNT(1)
 FROM location
 GROUP BY country_id;

/* Write a query in SQL to display the manager ID and number of employees managed by the manager. */
SELECT manager_id, COUNT(1)
 FROM employee
 GROUP BY manager_id

/* Write a query in SQL to display the details of jobs in descending sequence on job title. */
SELECT *
 FROM job
 ORDER BY title;

/* Write a query in SQL to display the first and last name and date of joining of the employees who is either Sales Representative or Sales Man. */
SELECT first_name, last_name, hire_date
FROM employee
WHERE job_id IN (SELECT id FROM job WHERE title IN ('Sales Representative', 'Sales Man'));

/* Write a query in SQL to display the average salary of employees for each department who gets a commission percentage. */
SELECT department_id, AVG(salary)
FROM employee
WHERE commission_pct > 0
GROUP BY department_id;

/* Write a query in SQL to display those departments where any manager is managing 4 or more employees. */
SELECT DISTINCT department_id FROM (SELECT manager_id, department_id, COUNT(1) AS nb
FROM employee
GROUP BY manager_id, department_id) G
WHERE G.nb >= 4;

/* Write a query in SQL to display those departments where more than ten employees work who got a commission percentage. */
SELECT department_id
FROM (SELECT department_id, count(1) AS nb
  FROM employee
  WHERE commission_pct > 0
  GROUP BY department_id) AS G
WHERE G.nb > 10

/* Write a query in SQL to display the employee ID and the date on which he ended his previous job. */
SELECT employee_id, MAX(end_date)
FROM job_history
WHERE end_date IS NOT NULL
GROUP BY employee_id

/* Write a query in SQL to display the details of the employees who have no commission percentage and salary within the range 7000 to 12000 and works in that department which number is 5. */
SELECT *
 FROM employee
 WHERE commission_pct = 0 AND salary BETWEEN 7000 AND 12000 AND department_id = 5;

/* Write a query in SQL to display the job ID for those jobs which average salary is above 8000. */
SELECT id
 FROM job
 WHERE max_salary - min_salary > 8000;

/* Write a query in SQL to display job Title, the difference between minimum and maximum salaries for those jobs which max salary within the range 12000 to 18000. */
SELECT title
 FROM job
 WHERE max_salary - min_salary BETWEEN 12000 AND 18000;

/* Write a query in SQL to display all those employees whose first name or last name starts with the letter D. */
SELECT *
 FROM employee
 WHERE first_name LIKE 'D%' OR last_name LIKE 'D%';

/* Write a query in SQL to display the details of jobs which minimum salary is greater than 9000. */
SELECT *
 FROM job
 WHERE min_salary > 9000;

/* Write a query in SQL to display those employees who joined after 7th September, 1987. */
SELECT *
 FROM employee
 WHERE hire_date > '1987-09-07';
