const { sumArray } = require('../arrays.js');

test('Sum all numbers in an array <sumArray>', async () => {
    const result = await sumArray([1, 2, 3, 4]);
    expect(result).toBe(10);
})
