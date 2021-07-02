// const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('engineer object', () => {

    const eng = new Engineer('gal', 34, 'something@gmail.com', 'github')

    expect(eng.name).toBe('gal')
    expect(eng.id).toBe(34);
    expect(eng.github).toBe('github');
    expect(eng.email).toBe('something@gmail.com');

})