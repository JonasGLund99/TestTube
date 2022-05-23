const { sum } = require('../sum.js');

test('Sum two positive numbers <sum>', async () => {
    const result = await sum(12,13);
    expect(result).toBe(25);
})
test('Sum two negative numbers <sum>', async () => {
    const result = await sum(-2,-10);
    expect(result).toBe(-12);
})
test('Sum a negative and a positive number <sum>', async () => {
    const result = await sum(-1,1);
    expect(result).toBe(0);
})
