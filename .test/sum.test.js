const { sum } = require('../sum.js');

test('Hello im under da water <sum>', async () => {
    const result = await sum(10,59);
    expect(result).toBe(69);
})
