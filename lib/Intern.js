const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school
    }

    getSchool() {
        inquirer.prompt({
            type: 'input',
            name: 'schoolname',
            message: 'What is your school?',
        })
            .then((schoolname) => {
                this.school = schoolname;

            })
        return this.school
    }
    getRole() {
        return 'Intern'
    }


}


module.exports = Intern;