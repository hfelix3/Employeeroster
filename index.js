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

  
  function addEmployee(){
    console.log('employee added')
    Connection.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)'),
    db.query(sql, answers, (err, rows) => {
      if (err) {
        console.error(err)
        return;
      }
      console.table(rows)
    })
  };

});
  
  inquirer
.prompt([
  {
    type: 'input',
    message: 'Enter the name of the department',
    name: 'Add a department',
  },
  {
    type: 'input',
    message: 'Enter the name, salary, and department for the role',
    name: 'Add a role',
  },
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
  console.log (answers.ENTERED) 
  if (answers.ENTERED == 'Add a department') {
    addDepartment()
  } else if (answers.ENTERED == 'Add a role') {
    addRole()
  } else if (answers.ENTERED == 'Add an employee') {
    addEmployee()
  }
  function addDepartment(){
    console.log('department added')
    Connection.query('INSERT INTO Add a department'),
  
    db.query(sql, (err, rows) => {
      if (err) {
        console.error(err)
        return;
      }
      console.table(rows)
    })
  };
  
  function addRole(){
    console.log('role added')
    Connection.query('INSERT INTO Add a role'),
  
    db.query(sql, (err, rows) => {
      if (err) {
        console.error(err)
        return;
      }
      console.table(rows)
    })
  };

});