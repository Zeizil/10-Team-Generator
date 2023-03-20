const inquirer = require("inquirer");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

class Employee {
    
    //need name, id, email
    #name;
    #id;
    #email;

    constructor() {
        this.#name = name;
        //why is name deprecated?
        this.#id = id;
        this.#email = email;
    }

    //get functions - just return the values
    getName() {
        return this.#name;
    }

    getID(){
        return this.#id;
    }

    getEmail() {
        return this.#email;
    }

    //returning string
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;