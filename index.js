
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const fs = require("fs")


// saves all the html code
const team = [];


//first question
const firstQ = [
    {
        type: 'list',
        name: 'emploop',
        message: 'Do you want to add an employee?',
        choices: ['yes', 'no']
    },
]





const fixedHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
<header>
  <h1>My team</h1> 
  </header>
  <div class="row">`

function writeToFile() {
    return fs.writeFile("./src/index.html", fixedHTML, function (err) {
        if (err) {
            return console.log(err)
        }
        else {
            return console.log("yes")
        }


    }


    )


}
writeToFile()


function addClosingTags() {
    let closingTags = `
    </div>
    </body> 
    </html>`

    fs.appendFile('./src/index.html', closingTags, function (err) {
        if (err) {
            console.log(err);
        };
    })
}


function firstQuestion() {


    //Asks first question if yes creates new employ if no creates HTML page 
    inquirer.prompt(firstQ)
        .then(answer => {
            if (answer.emploop === 'yes') {
                askMainQ();
            } else {
                console.log("Generating HTML with this input" + team)
                addClosingTags()
            }
        })
}

firstQuestion()

//main questiones 
const mainQuestions = [
    {
        type: 'list',
        name: 'emp',
        message: 'What kind of employee?',
        choices: ['Intern', 'Manager', 'Engineer']
    },
    {
        type: 'input',
        name: 'empName',
        message: 'what is your name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'what is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your email?',
    },
]


// function to ask main question, depending on answer calls other function 
function askMainQ() {
    inquirer.prompt(mainQuestions).then(answer => {

        switch (answer.emp) {
            case 'Manager': managerQ(answer); break;
            case 'Intern': internQ(answer); break;
            case 'Engineer': engineerQ(answer); break;
            default:
                break;
        }
    })
}


//Manager questions
const managerQuestions = [
    {
        type: 'input',
        name: 'officeNum',
        message: 'what is your office number?',
    }
]

function managerQ(employeeInfo) {
    inquirer.prompt(managerQuestions).then(answer => {
        let data = { ...answer, ...employeeInfo }
        // let employee = new Manager(data.empName, data.id, data.email, data.officeNum); 
        let managerHTMLCard = managerHTML(data);
        team.push(managerHTMLCard);

        fs.appendFile('./src/index.html', managerHTML(data), function (err) {
            if (err) {
                console.log(err);
            };
        })

        firstQuestion();
    })
}

function managerHTML(data) {
    let cardMan = "";
    cardMan = `
    <div class="column">
    <div class="card">
    <div class="card-header">
    <h3>${data.empName} </h3>
    </br> Manager </div>
    <div class="card-body">
    ID: ${data.id} </br>
    Email:<a href="mailto: "> ${data.email}</a> </br>
    Office Number: ${data.officeNum} 
    </div>
    </div>
    </div>
    `;
    return cardMan
}
// End of Manager


// Intern questions
const internQuestions = [
    {
        type: 'input',
        name: 'school',
        message: 'what is your school name ?',
    }
]

function internQ(employeeInfo) {
    inquirer.prompt(internQuestions).then(answer => {
        let data = { ...answer, ...employeeInfo }
        // let employee = new Manager(data.empName, data.id, data.email, data.officeNum); 
        let internHTMLCard = internHTML(data);
        team.push(internHTMLCard);
        fs.appendFile('./src/index.html', internHTML(data), function (err) {
            if (err) {
                console.log(err);
            };
        })

        firstQuestion();
    })
}

function internHTML(data) {
    let cardInt = "";
    cardInt = `
    <div class="column">
    <div class="card">
    <div class="card-header">
    <h3>${data.empName} </h3>
    </br> Intern </div>
    <div class="card-body">
    ID: ${data.id} </br>
    Email:<a href="mailto: "> ${data.email}</a></br>
    School Name: ${data.school}
    </div>
    </div>
    </div>
    `
    return cardInt
}
// Intern ends

//Engineer questions 
const engineerQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'what is your github username?',
    }
]

function engineerQ(employeeInfo) {
    inquirer.prompt(engineerQuestions).then(answer => {
        let data = { ...answer, ...employeeInfo }
        let engineerHTMLCard = engineerHTML(data);
        team.push(engineerHTMLCard);
        fs.appendFile('./src/index.html', engineerHTML(data), function (err) {
            if (err) {
                console.log(err);
            };
        })
        firstQuestion();
    })
}

function engineerHTML(data) {
    let cardEng = "";
    cardEng = `
    <div class="column">
    <div class="card">
    <div class="card-header">
    <h3>${data.empName} </h3>
    </br> Engineer</div>
    <div class="card-body">
    ID: ${data.id} </br>
    Email:<a href="mailto: "> ${data.email}</a> </br>
    Github:<a href="https://www.Github.com/${data.github}">${data.github}</a>
    </div>
    </div>
    </div>
    `
    return cardEng
}
//end engineer





