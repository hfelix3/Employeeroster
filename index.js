const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection( 
  {
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'roster_db'
});

inquirer
  .prompt([
      //TODO: create the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    {
        type: 'list',
        message: 'WHAT WOULD YOU LIKE TO DO?',
        name: 'SELECTED',
        choices: [
          'View all departments', 
          'View all roles', 
          'View all employees', 
          'Add a department', 
          'Add a role', 
          'Add an employee', 
          'Update an employee role'
        ],
    },
  ]).then((answers) => {
    // TODO: Create if statements
    // TODO: Create a function for the choices then an SQL query to get the departments
    // TODO: Work with "answers.choice", call function to get employees, look into switch statement to review statements. 
  console.log (answers.SELECTED) 
  if (answers.SELECTED == 'View all departments') {
    getAllDepartments()
  } else if (answers.SELECTED == 'View all roles') {
    getAllRoles()
  } else if (answers.SELECTED == 'View all employees') {
    getAllEmployees()
  } else if (answers.SELECTED == 'Add a department') {
    addDepartment();
  } else if (answers.SELECTED == 'Add a role') {
    addRole();
  } else if (answers.SELECTED == 'Add an employee') {
    addEmployee();
  } else if (answers.SELECTED == 'Update an employee role') {
    updateEmployeeRole();
  }
});

function getAllDepartments() {
  console.log ('departments loaded')
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err)
      return;
    }
    console.table(rows)
  })
};

function getAllRoles() {
  console.log ('roles loaded')
  const sql = `SELECT * FROM roles`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err)
      return;
    }
    console.table(rows)
  })
};

function getAllEmployees() {
  console.log ('employees loaded')
  const sql = `SELECT * FROM employees`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err)
      return;
    }
    console.table(rows)
  })
};

function addDepartment() {
  console.log('started addDepartment function')
  inquirer
.prompt([
  {
    type: 'input',
    message: 'Enter the name of the department',
    name: 'Add a department',
  },
]).then((answers) => {
console.log(answers);
console.log('department added');
});
};

function addRole() {
  console.log('started addRole function')
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter the name for the role',
      name: 'Add a role',
    },
    {
      type: 'input',
      message: 'Enter the salary for the role',
      name: 'Add a role',
    },
    {
      type: 'input',
      message: 'Enter the department for the role',
      name: 'Add a role',
    },
  ]).then((answers) => {
    console.log(answers);
    console.log('role added')
  });
};


function addEmployee() {
  console.log('started addEmployee function')
inquirer
.prompt([
  {
    type: 'input',
    message: "Enter the employee's first name",
    name: 'firstName',
  },
  {
    type: 'input',
    message: "Enter the employee's last name",
    name: 'lastName',
  },
  {
    type: 'input',
    message: "Enter the employee's role",
    name: 'role',
  },
  {
    type: 'input',
    message: "Enter the employee's manager",
    name: 'manager',
  },
]).then((answers) => {
  console.log(answers);

  db.query(
    'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
    [answers.firstName, answers.lastName, answers.role, answers.manager],
    (err, results) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Employee added');
      }
    }
  );
});
};


function updateEmployeeRole() {
  console.log('started updateEmployeeRole function')
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'Select an employee to update',
      name: 'Update an employee role',
      choices: ['employee 1', 'employee 2'],
    },
    {
      type: 'input',
      message: 'Update employee new role',
      name: 'Update an employee role',
    },
  ]).then((answers) => {
    console.log(answers);
    console.log('employee role updated')
  });
};