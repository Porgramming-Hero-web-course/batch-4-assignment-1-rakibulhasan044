const removeDuplicates = (num: number[]): number[] => {
    let newArray: number[] = []
    for(let i = 0; i< num.length; i++) {
        let key: number = num[i]
        if(!newArray.includes(key)) {
            newArray.push(key)
        }
    }
    return newArray
}

const result2 = removeDuplicates([1, 2, 3, 4, 10, 2, 3, 10, 11])
console.log(result2);