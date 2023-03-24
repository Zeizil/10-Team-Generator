const path = require("path");
const fs = require("fs");
const inquirer = require('inquirer')
const generateHtml = require('./generateHtml')
const Intern = require('./intern')
const Engineer = require('./engineer')
const Manager = require('./manager')

const newTeam = [];

// Enter manager info automatically

function managerInfo() {
    inquirer.prompt ([
        {
            name: 'name',
            message: 'Enter Name: ',
            type: 'input',
        },
        {
            name: 'id',
            message: 'Enter ID:',
            type: 'input',
        },
        {
            name: 'email',
            message: 'Enter Email: ',
            type: 'input',
        },
        {
            name: 'officeNum',
            message: 'Enter Office Number: ',
            type: 'input',
        },
    ])
    .then ((answers) => {
        const theManager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        newTeam.push(theManager);
        newEmployee();
    })
}

managerInfo();

// create team

function newEmployee() {
    inquirer.createPromptModule({
        name: 'new',
        message: 'Type of Employee? (Press any other key if done): ',
        type: 'input',
    })
    .then((answers) => {
        if(answers.new == 'intern'){
            makeIntern()
        }
        else if(answers.new == 'engineer'){
            makeEngineer()
        }
        else{
            fs.writeFileSync('index.html', generateHtml(newTeam), "utf-8");
        }
    })
}

// Intern

function makeIntern() {
    inquirer.prompt([
        {
            name: 'name',
            message: 'Enter Name: ',
            type: 'input',
        },
        {
            name: 'id',
            message: 'Enter ID: ',
            type: 'input',
        },
        {
            name: 'email',
            message: 'Enter Email: ',
            type: 'input',
        },
        {
            name: 'school',
            message: 'Enter School: ',
            type: 'input',
        },
    ])
    .then ((answers) => {
        const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        newTeam.push(newIntern);
        newEmployee();
    })
}

// Engineer

function makeEngineer() {
    inquirer.prompt([
        {
            name: 'name',
            message: 'Enter Name: ',
            type: 'input',
        },
        {
            name: 'id',
            message: 'Enter ID: ',
            type: 'input',
        },
        {
            name: 'email',
            message: 'Enter Email: ',
            type: 'input',
        },
        {
            name: 'GitHub',
            message: 'Enter GitHub: ',
            type: 'input',
        },
    ])
    .then ((answers) => {
        const newEng = new Engineer(answers.name, answers.id, answers.email, answers.GitHub);
        newTeam.push(newEng);
        newEmployee();
    })
}