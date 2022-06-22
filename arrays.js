function sumArray(A) {
    let sum = 0;
    A.forEach(element => {
        sum += Number(element);
    });

    return sum;
}

console.log(sumArray([1, 2, 3, 4]));

module.exports = { sumArray };