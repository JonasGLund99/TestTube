const { mult } = require('../mult.js');

test('Multiply two numbers <mult>', async () => {
    const result = await mult(10,2);
    expect(result).toBe(20);
})
