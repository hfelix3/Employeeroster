DROP DATABASE IF EXISTS roster_db;
CREATE DATABASE roster_db;

USE roster_db;

-- TODO: Create a "DEPARTMENT TABLE" showing department names and department ids.

CREATE TABLE department(
  department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

-- TODO: create a "ROLES TABLE" showing the job title, role id, the department that role belongs to, and the salary for that role.

CREATE TABLE roles(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30) NOT NULL,
  department_id INT,
  salary INT NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(department_id)
  ON DELETE SET NULL
);

-- TODO: Create a "EMPLOYEES TABLE" showing showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to"

CREATE TABLE employees(
  employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  job_title VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  salary INT NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (role_id)
  REFERENCES roles(id)
  ON DELETE SET NULL,
  FOREIGN KEY (manager_id)
  REFERENCES employee(employee_id)
  ON DELETE SET NULL
);