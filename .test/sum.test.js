const { sum } = require('../sum.js');

test('Sum two numbers <sum>', async () => {
    const result = await sum(1,2);
    expect(result).toBe(3);
})
test('Sum two more nice numbers <sum>', async () => {
    const result = await sum(1,1);
    expect(result).toBe(2);
})
