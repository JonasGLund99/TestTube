const { multiply } = require('../multiply.js');

test('Multiply two numbers <multiply>', async () => {
    const result = await multiply(1,1);
    expect(result).toBe(1);
})
