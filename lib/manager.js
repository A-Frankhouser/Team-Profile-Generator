// Imports Employee Constructor
const Employee = require("./employee");

// Manager constructor
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    // Returns "Manager"
    getRole() {
        return "Manager";
    }
}

// Exports
module.exports = Manager;