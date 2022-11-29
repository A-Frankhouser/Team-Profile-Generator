// Uses the Manager constructor 
const Manager = require('../lib/Manager');

// Creates a manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Alex', 25, 'freesoul423@gmail', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets the role value from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Alex', 25, 'freesoul423@gmail', 1);

    expect(manager.getRole()).toEqual("Manager");
}); 