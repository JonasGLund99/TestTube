const { sumTwo } = require('../sum.js');

const { sumThree } = require('../sum.js');

const { sumFour } = require('../sum.js');

test('Sum dis two numbers <sumTwo>', async () => {
    const result = await sumTwo(20,49);
    expect(result).toEqual(69);
})
test('Sum four (this will also fail) <sumFour>', async () => {
    const result = await sumFour(2,3,4,5);
    expect(result).toBe(1);
})
