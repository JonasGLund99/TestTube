const { multiplyTwo } = require('../multiply.js');

const { multiplyThree } = require('../multiply.js');

test('Multiply two numbers lager than zero. <multiplyTwo>', async () => {
    const result = await multiplyTwo(10,55);
    expect(result).toEqual(550);
})
test('Multiply with zero <multiplyTwo>', async () => {
    const result = await multiplyTwo(175,0);
    expect(result).toStrictEqual(0);
})
test('Multiply negative (will fail) <multiplyTwo>', async () => {
    const result = await multiplyTwo(20,-1);
    expect(result).toEqual(20);
})
test('Multiply three numbers <multiplyThree>', async () => {
    const result = await multiplyThree(1,2,3);
    expect(result).toBe(6);
})
