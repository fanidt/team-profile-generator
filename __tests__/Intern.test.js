const Intern = require('../lib/Intern.js');



test('checks the manager object', () => {

    const int = new Intern('fii', 35, 'somethin@gmail.com', 'schoolll')

    expect(int.id).toBe(35);
    expect(int.name).toBe('fii');
    expect(int.email).toBe('somethin@gmail.com');
    expect(int.school).toBe('schoolll');
});