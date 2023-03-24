const Employee = require ('./Employee');

class Intern extends Employee {
    // needs school, get the school, get the role (Intern)
    constructor(){
        this.school = school;

    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;