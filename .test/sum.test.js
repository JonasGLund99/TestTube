const { sum } = require('../sum.js');

test('Sum two positive numbers <sum>', async () => {
    const result = await sum(1,2);
    expect(result).toBe(3);
})
<<<<<<< HEAD
=======
test('Sum two negative numbers <sum>', async () => {
    const result = await sum(-1,-2);
    expect(result).toBe(-3);
})
>>>>>>> fbe4898 (Commit by TestTube)
