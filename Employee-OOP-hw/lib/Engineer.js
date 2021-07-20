// import Employee class
const Employee = require('./Employee');

// create Engineer which extends Employee
//create a constructor function that takes in name, id, email, github
//use super metheod to pass name, id, email
// and sets them as properties of employee 
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // getRole(){}
    getRole() {
        return 'Engineer';
    }

    // getGithub(){}
    getGithub() {
        return this.github;
    }
}

// export Engineer
module.exports = Engineer;