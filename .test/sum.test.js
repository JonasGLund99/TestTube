const { sum } = require('../sum.js');

test('Sum two numbers <sum>', async () => {
    const result = await sum(1,2);
    expect(result).toBe(3);
})
