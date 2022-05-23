const { sum } = require('../../lib/sum.js');

test('Sum two positive numbers <sum>', async () => {
    const result = await sum(2,2);
    expect(result).toBe(4);
})
test('Sum two negative numbers <sum>', async () => {
    const result = await sum(-3,-9);
    expect(result).toBe(-12);
})
