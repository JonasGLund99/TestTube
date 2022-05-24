const { multiply } = require('../multiply.js');

test('multiply two numbers <multiply>', async () => {
    const result = await multiply(1,1);
    expect(result).toBe(2);
})
