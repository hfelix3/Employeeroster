-- if inserting many add another section "(000, name);"
INSERT INTO department (department_id, department_name)
VALUES (000, "");

INSERT INTO roles (role_id, job_title, role_department_, salary)
VALUES (000, "", "",000000);

INSERT INTO employees (employee_id, first_name, last_name, job_title, department_name, salary, manager_name)
VALUES (000, "", "","", "", 000000, "");

-- ? DO I NEED ONE OF THESE FOR EVERY TABLE? ALSO THE SELECT DATA BASE? what is it doing exactly?
SELECT * FROM department;