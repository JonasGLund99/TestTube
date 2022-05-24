const { divide } = require('../divide.js');

test('Divide two numbers <divide>', async () => {
    const result = await divide(1,1);
    expect(result).toBe(1);
})
test('Divideded <divide>', async () => {
    const result = await divide(2,2);
    expect(result).toBe(1);
})
