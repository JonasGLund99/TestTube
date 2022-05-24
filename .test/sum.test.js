const { sum } = require('../sum.js');

test('Must work <sum>', async () => {
    const result = await sum(2,3);
    expect(result).toBe(5);
})
test('fail <sum>', async () => {
    const result = await sum(9,8);
    expect(result).toBe(10);
})
