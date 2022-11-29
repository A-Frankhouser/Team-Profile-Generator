// Import Employee Constructor
const Employee = require("./employee");

// Intern Constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    // Gets value for school
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

// Exports
module.exports = Intern;