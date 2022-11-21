// Import Employee Constructor
const Employee = require("./employee")

// Engineer Constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {

        super (name, id, email);

        this.github = github;
    }

    // Returns the value for github
    getGit() {
        return this.github;
    }

    getPostition() {
        return "Engineer";
    }
}

// Exports
module.exports = Engineer;
