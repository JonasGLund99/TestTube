const { sumTwo } = require('../sum.js');

const { sumThree } = require('../sum.js');

test('Sum dis two numbers <sumTwo>', async () => {
    const result = await sumTwo(20,49);
    expect(result).toEqual(69);
})
