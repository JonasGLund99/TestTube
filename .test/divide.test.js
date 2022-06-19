const { divide } = require('../divide.js');

test('Division <divide>', async () => {
    const result = await divide(7,2);
    expect(result).toBe(3.5);
})
test('Another division <divide>', async () => {
    const result = await divide(10,5);
    expect(result).toStrictEqual(2);
})
