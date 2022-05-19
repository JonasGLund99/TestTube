const { multiplyTwo } = require('../../multiplication/multiply.js');

const { multiplyThree } = require('../../multiplication/multiply.js');

test('Multiplying two numbers <multiplyTwo>', async () => {
    const result = await multiplyTwo(5,10);
    expect(result).toStrictEqual(50);
})
test('Another one for multiply <multiplyTwo>', async () => {
    const result = await multiplyTwo(9,7);
    expect(result).toStrictEqual(63);
})
test('Multiplying three numbers <multiplyThree>', async () => {
    const result = await multiplyThree(2,3,4);
    expect(result).toStrictEqual(24);
})
