DROP DATABASE IF EXISTS roster_db;
CREATE DATABASE roster_db;

USE roster_db;

-- TODO: Create a "DEPARTMENT TABLE" showing department names and department ids.

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- TODO: create a "ROLES TABLE" showing the job title, role id, the department that role belongs to, and the salary for that role.

CREATE TABLE roles(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary INT NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

-- TODO: Create a "EMPLOYEES TABLE" showing showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to"

CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
  REFERENCES roles(id)
  ON DELETE SET NULL,
  FOREIGN KEY (manager_id)
  REFERENCES employees(id)
  ON DELETE SET NULL
);