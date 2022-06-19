const { subtract } = require('../subtraction.js');

test('Subtract this please <subtract>', async () => {
    const result = await subtract(10,2);
    expect(result).toBe(8);
})
