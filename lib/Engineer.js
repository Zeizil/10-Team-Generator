const Employee = require('./Employee');

class Engineer extends Employee {
    // need to return github
    constructor(){
        this.github = github;

    }

    getRole() {
        return 'Engineer';
    }

    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer;