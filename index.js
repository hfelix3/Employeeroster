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
        // todo: need array of choices with name and value
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
    },
    // {
    //     type: 'input',
    //     message: 'Enter the name of the department',
    //     name: 'Add a department',
    // },
    // {
    //     type: 'input',
    //     message: 'Enter the name, salary, and department for the role',
    //     name: 'Add a role',
    // },
    // {
    //     type: 'input',
    //     message: 'Enter the employee’s first name',
    //     name: 'Add an employee',
    // },
    // {
    //   type: 'input',
    //   message: 'Enter the employee’s last name',
    //   name: 'Add an employee',
    // },
    // {
    //   type: 'input',
    //   message: 'Enter the employee’s role',
    //   name: 'Add an employee',
    // },
    // {
    //   type: 'input',
    //   message: 'Enter the employee’s manager',
    //   name: 'Add an employee',
    // },
    // {
    //     type: 'list',
    //     message: 'Select an employee to update',
    //     name: 'Update an employee role',
    //     choices: ['employee 1', 'employee 2'],
    // },
    // {
    //     type: 'input',
    //     message: 'Update employee new role',
    //     name: 'Update an employee role',
    // },
  ]).then((answers) => {
    // TODO:IF STATEMENTS
    // TODO:CREATE FUNCTION FOR CHOICES THEN SQL QUERY TO GET DEPARTMENTS
    // TODO: work with "answers.choice", call function to get employees, look into switch statement to review statements. 
  console.log (answers.SELECTED) 
  if (answers.SELECTED == 'View all departments') {
    getAllDepartments()
  }
});

function getAllDepartments() {
  console.log ('Hello')
  const sql = `SELECT * FROM department`;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err)
      return;
    }
    console.table(rows)
  })
};