SELECT *
FROM roles  
JOIN department ON roles.department_id = department.id
JOIN employees ON employees.role_id = roles.id;