const { sum } = require('../sum.js');

test('Sum two positive numbers <sum>', async () => {
    const result = await sum(1,2);
    expect(result).toBe(3);
})
test('Sum two negative numbers <sum>', async () => {
    const result = await sum(-1,-4);
    expect(result).toBe(-5);
})
