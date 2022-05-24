const { divide } = require('../divide.js');

test('Divide two numbers <divide>', async () => {
    const result = await divide(1,1);
    expect(result).toBe(1);
})
