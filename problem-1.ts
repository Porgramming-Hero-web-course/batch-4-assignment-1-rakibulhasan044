const sumArray = (num: number[]): number => {
    let sum: number = 0;
    for(let i = 0; i < num.length; i++){

        sum += num[i];
    }
    return sum
}

const result1 = sumArray([1, 2, 3, 4, 15])
console.log(result1);