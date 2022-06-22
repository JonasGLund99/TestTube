const { sumTwo } = require('../sum.js');

const { sumThree } = require('../sum.js');

const { sumFour } = require('../sum.js');

test('Sum two even numbers <sumTwo>', async () => {
    const result = await sumTwo(2,4);
    expect(result).toBe(6);
})
test('Sum odd numbers <sumFour>', async () => {
    const result = await sumFour(3,7,9,5);
    expect(result).toBe(7);
})
test('Sum negative numbers <sumFour>', async () => {
    const result = await sumFour(-1,-2,-3,-4);
    expect(result).toBe(-10);
})
