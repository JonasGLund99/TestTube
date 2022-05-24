const { sum } = require('../sum.js');

const { sumThree } = require('../sum.js');

test('Sum two positive numbers <sum>', async () => {
    const result = await sum(1,2);
    expect(result).toBe(3);
})
test('Sum two negative numbers <sum>', async () => {
    const result = await sum(-1,-2);
    expect(result).toBe(-3);
})
test('Sum three numbers <sumThree>', async () => {
    const result = await sumThree(1,2,3);
    expect(result).toBe(6);
})
