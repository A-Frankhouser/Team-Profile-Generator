// Uses the Engineer constructor
const Engineer = require('../lib/Engineer');

// Creates an engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Alex', 24, 'freesoul423@gmail', 'A-Frankhouser');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// Gets github value from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Alex', 24, 'freesoul423@gmail', 'A-Frankhouser');

    expect(engineer.getGit()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Gets job role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Alex', 24, 'freesoul423@gmail', 'A-Frankhouser');

    expect(engineer.getRole()).toEqual("Engineer");
});