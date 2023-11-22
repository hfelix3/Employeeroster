SELECT *
FROM roles  
JOIN department ON roles.department_id = department.id
JOIN employees ON employees.title = roles.id;