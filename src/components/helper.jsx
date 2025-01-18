function genRandomNum(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sum(tkt) {
const sum = tkt.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
return sum;

}

export { genRandomNum, sum }; // Correct export
