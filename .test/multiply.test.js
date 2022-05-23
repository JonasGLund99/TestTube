const { multiply } = require('../multiply.js');

test('Multiply two numbers <multiply>', async () => {
    const result = await multiply(2,3);
    expect(result).toBe(6);
})
