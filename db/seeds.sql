INSERT INTO department (department_id, department_name)
VALUES  
    (001, "Sales"),
    (002, "Engineering"),
    (003, "Finance"),
    (004, "Legal");

INSERT INTO roles (role_id, job_title, role_department, salary)
VALUES
    (001, "Sales Lead", "Sales",100000),
    (002, "Lead Engineer", "Engineering",150000),
    (003, "Accountant", "Finance",125000),
    (004, "Lawyer", "Legal",190000);

INSERT INTO employees (employee_id, first_name, last_name, job_title, department_name, salary, manager_name)
VALUES
    (001, "John", "Doe","Sales Lead"),
    (002, "Mike", "Chan","Sales Person"),
    (003, "Ashley", "Rodriguez","Lead Engineer"),
    (004, "Kevin", "Tupik","Software Engineer"),
    (005, "Kunal", "Singh","Account Manager"),
    (006, "Malia", "Brown","Accountant"),
    (007, "Sarah", "Lourd","Legal Team Lead");
        