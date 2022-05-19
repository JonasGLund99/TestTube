const { subtract } = require('../subtraction.js');

test('Subtract two numbers <subtract>', async () => {
    const result = await subtract(10,5);
    expect(result).toStrictEqual(5);
})
test('Subtract two numbers (negative) <subtract>', async () => {
    const result = await subtract(-10,5);
    expect(result).toStrictEqual(-15);
})
