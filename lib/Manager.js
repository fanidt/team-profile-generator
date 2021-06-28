const Employee = require("./Employee");
const inquirer = require('inquirer');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber
    }

    getofficeNumber(){
        inquirer.prompt({
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number?',
        })
        .then((officeNumber) => {
            this.officeNumber= officeNumber;
            this.getId()
        })
    }

    getRole() {
        return 'Manager'
    }


}


module.exports = Manager;