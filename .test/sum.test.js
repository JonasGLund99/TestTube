const { sum } = require('../sum.js');

test('sum two numbers <sum>', async () => {
    const result = await sum(1,1);
    expect(result).toBe(2);
})
