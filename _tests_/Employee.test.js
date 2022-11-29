// Employee Constructor
const { default: test } = require('node:test');
const Employee = require('../lib/employee');

// Creates an employee
test('Creates an employee', () => {
    const employee = new Employee('Alex', 34, 'billybob@gamil.com');

// What we expect the values to equal
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

// Gets name from employee object
test('Gets employee name', () => {
    const employee = new Employee('Alex', 34, 'billybob@gamil.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Gets ID from employee object
test('Gets employee Id', () => {
    const employee = new Employee('Alex', 34, 'billybob@gamil.com');
    expect(employee.getID()).toEqual(expect.any(Number));
})

// Gets Emails
test('Gets employees email', () =>  {
    const employee = new Employee('Alex', 34, 'billybob@gamil.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Gets position
test('Gets employees job position', () => {
    const employee = new Employee('Alex', 34, 'billybob@gamil.com');

    expect(employee.getRole()).toEqual("Employee");
});