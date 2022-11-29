// Uses the Intern constructor 
const Intern = require('../lib/Intern');

// Creates an Intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Alex', 23, 'freesoul423@gmail', 'NEIT');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// Gets the school value from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Alex', 23, 'freesoul423@gmail', 'NEIT');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets the role value from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Alex', 23, 'freesoul423@gmail', 'NEIT');

    expect(intern.getRole()).toEqual("Intern");
});