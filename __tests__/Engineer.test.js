// const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('engineer object', () => {

    const eng = new Engineer('gal', 34, 'gshda', 'github')

    expect(eng.name).toBe('gal')


})