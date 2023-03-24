const Employee = require ('./Employee');

class Manager extends Employee {
    // office number variable, no get?
    constructor(){
        this.officeNumber = officeNumber;

    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;