const inquirer = require('inquirer');
const Manager = require('./Manager.js')


class Employee {

    constructor(name, id, email) {

        this.name = name
        this.id = id
        this.email = email

    }

    getName() {
        inquirer
            .prompt({
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            })
            .then((name) => {
                this.name = name;
                this.getId()
            })

    }

    getId() {
        inquirer.prompt({
            type: 'input',
            name: 'id',
            message: 'What is the id?'
        })
            .then((id) => {
                this.id = id;
                this.getEmail()
            })

    }


    getEmail() {
        inquirer.prompt({
            type: 'input',
            name: 'email',
            message: 'What is the email address?'
        })
            .then((email) => {
                this.email = email;
                this.kindofEmployee()
            })

    }

    getRole() {
        return 'Employee'

    }

    kindofEmployee() {
        inquirer.prompt({
            type: 'list',
            name: 'emp',
            message: 'What kind of empolyee do you want to add an employee?',
            choices: ['Intern', 'Manager', 'Engineer']
        })
        .then(({emp})=>{
            if (emp === 'Manager') {
                console.log("Manager")
            }

            else if (emp === 'Intern'){
                console.log('Intern')
            }

            else {console.log("ENGINEER")}



        })

           
    }

}


module.exports = Employee;




