
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');


const question = {
    type: 'list',
    name: 'emploop',
    message: 'Do you want to add an employee?',
    choices: ['yes', 'no']
}

const question2 = {
    type: 'list',
    name: 'emp',
    message: 'Do you want to add an employee?',
    choices: ['Intern', 'Manager', 'Engineer']
}

// async function manage() {
//     await new Employee().getName()
//     inquirer
//         .prompt(question2)
//         .then(({ emp }) => {

//              {
//                 new Manager().getofficeNumber()
//             }

//         })
// }

inquirer.prompt(question)
    .then(({ emploop }) => {
        if (emploop === 'yes') {
            console.log("yeahh")

            new Employee().getName()



        }


        else {
            console.log("NOOOO")

        }
    }

    
    


    )
