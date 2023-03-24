const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

const makeHtml = newTeam => {
    const managerCard = Manager => (`
        <div>
            <div class="card">
                <h2>${Manager.name}<h2>
                <h3>Manager</h3>
                <ul>
                    <li>ID: ${Manager.id}</li>
                    <li>Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
                    <li>Office Number: ${Manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    `);

    const InternCard = Intern => (`
        <div>
            <div class="card">
                <h2>${Intern.name}<h2>
                <h3>Manager</h3>
                <ul>
                    <li>ID: ${Intern.id}</li>
                    <li>Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                    <li>School: ${Intern.school}</li>
                </ul>
            </div>
        </div>
    `);

    const EngCard = Engineer => (`
        <div>
            <div class="card">
                <h2>${Engineer.name}<h2>
                <h3>Manager</h3>
                <ul>
                    <li>ID: ${Engineer.id}</li>
                    <li>Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
                    <li>GitHub: ${Engineer.github}</li>
                </ul>
            </div>
        </div>
    `);

    // put all cards together in an array
    const cards = [];
    cards.push(newTeam.filter(Employee => Employee.getRole() === 'Manager')).map(Manager => managerCard(Manager));
    cards.push(newTeam.filter(Employee => Employee.getRole() === 'Intern')).map(Intern => InternCard(Intern));
    cards.push(newTeam.filter(Employee => Employee.getRole() === 'Engineer')).map(Engineer => EngCard(Engineer));

}

module.exports = newTeam => (`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div>
        <h1>The Team</h1>
        <div>
            ${makeHtml(newTeam)}
        </div>
    </div>
</body>
`)