DROP DATABASE IF EXISTS roster_db;
CREATE DATABASE roster_db;

USE roster_db;

-- TODO: Create a "DEPARTMENT TABLE" showing department names and department ids.

CREATE TABLE department(
  department_id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  --? for department_id do I replace INT NOT NULL with INT PRIMARY KEY or combine them? same with role.
);

-- TODO: create a "ROLES TABLE" showing the job title, role id, the department that role belongs to, and the salary for that role.
-- change name to "role"
CREATE TABLE roles(
  role_id INT NOT NULL,
  job_title VARCHAR(30) NOT NULL,
  role_department VARCHAR(100) NOT NULL,
  salary INT NOT NULL,
);

-- TODO: Create a "EMPLOYEES TABLE" showing showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to"

CREATE TABLE employees(
  employee_id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  job_title VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  salary INT NOT NULL,
  manager_name VARCHAR(100) NOT NULL,
);