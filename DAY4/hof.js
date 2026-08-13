const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplyByTwo = (num) => num * 2;
console.log(arr.map(multiplyByTwo));

const isEven = (num) => num % 2 === 0;
console.log(arr.filter(isEven));

const sum = (accumulator, currentValue) => accumulator + currentValue;
console.log(arr.reduce(sum, 0));