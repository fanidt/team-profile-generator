const Manager = require('../lib/Manager.js');

test('checks the manager object', () => {

    const manager = new Manager('fii', 35, 'somethin@gmail.com', 'officeee')

    expect(manager.id).toBe(35);
    expect(manager.name).toBe('fii');
    expect(manager.email).toBe('somethin@gmail.com');
    expect(manager.officeNumber).toBe('officeee');
});