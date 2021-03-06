// create Employee class
//create a constructor function that takes in name, id, email
// and sets them as properties of employee 
//such as this.name= name
class Employee {
    constructor(name, id, email) {
            this.name = name;
            this.id = id;
            this.email = email;
        }
        // getName(){}

    getName() {
        return this.name;
    }

    // getId(){}
    getId() {
        return this.id;
    }

    // getEmail(){}
    getEmail() {
        return this.email;
    }

    // getRole(){}
    getRole() {
        return 'Employee';

    }
}

// export Employee
module.exports = Employee;