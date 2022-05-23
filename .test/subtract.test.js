const { subtract } = require('../subtract.js');

test('Subtract two numbers <subtract>', async () => {
    const result = await subtract(5,3);
    expect(result).toBe(2);
})
