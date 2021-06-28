
const Employee = require('../lib/Employee.js');

test('checks the employer object', () => {

    const empl = new Employee('fii', 35, 'somethin@gmail.com')

    expect(empl.id).toBe(35);
    expect(empl.name).toBe('fii');
    expect(empl.email).toBe('somethin@gmail.com');
});