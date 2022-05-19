const { sumTwo } = require('../sum.js');

const { sumThree } = require('../sum.js');

test('Sum two numbers <sumTwo>', async () => {
    const result = await sumTwo(22,10);
    expect(result).toStrictEqual(33);
})
test('Sum three numbers <sumThree>', async () => {
    const result = await sumThree(10,20,30);
    expect(result).toStrictEqual(60);
})
test('Sum three numbers (negative) <sumThree>', async () => {
    const result = await sumThree(-10,-10,-10);
    expect(result).toStrictEqual(-30);
})
