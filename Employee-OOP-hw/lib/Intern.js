// import Employee class
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}
// create Intern which extends Employee
//create a constructor function that takes in name, id, email, school
//use super metheod to pass name, id, email
// and sets them as properties of employee 
//such as this.school= school

module.exports = Intern
    // getRole(){}
    // getSchool(){}
    // export Intern