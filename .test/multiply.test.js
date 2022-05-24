const { multiply } = require('../multiply.js');

test('workyt <multiply>', async () => {
    const result = await multiply(8,8);
    expect(result).toBe(64);
})
