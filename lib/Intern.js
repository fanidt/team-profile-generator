const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school
    }

    getSchool() {
        // inquirer.prompt({
        //     type: 'input',
        //     name: 'school',
        //     message: 'What is your school?',
        // })
        // .then((school) => {
        //     this.school=school;
            
        // })
        return this.school
    }
    getRole() {
        return 'Intern'
    }


}


module.exports = Intern;