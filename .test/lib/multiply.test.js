const { multiply } = require('../../lib/multiply.js');

test('Multiply two numbers <multiply>', async () => {
    const result = await multiply(5,4);
    expect(result).toBe(20);
})
test('Multiply another two numbers <multiply>', async () => {
    const result = await multiply(1,1);
    expect(result).toBe(1);
})
