SELECT
    roles.job_title AS name, department.department_name AS department_name
FROM roles
JOIN department ON roles.jo