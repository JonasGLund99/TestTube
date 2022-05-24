const { sum } = require('../sum.js');

test('Sum two positive numbers <sum>', async () => {
    const result = await sum(1,2);
    expect(result).toBe(3);
})
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 89c7c00 (Commit by TestTube)
test('Sum two negative numbers <sum>', async () => {
    const result = await sum(-1,-2);
    expect(result).toBe(-3);
})
<<<<<<< HEAD
>>>>>>> fbe4898 (Commit by TestTube)
=======
>>>>>>> 89c7c00 (Commit by TestTube)
