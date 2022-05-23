const { sum } = require('../sum.js');

test('sum test <sum>', async () => {
    const result = await sum(1,1);
    expect(result).toBe(2);
})
