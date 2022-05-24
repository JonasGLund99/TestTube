const { multiply } = require('../multiply.js');

test('Multiply some numbers <multiply>', async () => {
    const result = await multiply(42,10);
    expect(result).toBe(420);
})
test('Fail dis pls <multiply>', async () => {
    const result = await multiply(69,69);
    expect(result).toBe(420);
})
