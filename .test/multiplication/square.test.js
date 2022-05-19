const { square } = require('../../multiplication/square.js');

test('Square a number <square>', async () => {
    const result = await square(3);
    expect(result).toStrictEqual(9);
})
test('Square a negative number <square>', async () => {
    const result = await square(-3);
    expect(result).toStrictEqual(9);
})
