// A constructor for employees
class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }

    // Returns a value for the name
    getName() {
        return this.name;
    }

    // Returns the value for id
    getID() {
        return this.id;
    }

    // Returns the value for email
    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;