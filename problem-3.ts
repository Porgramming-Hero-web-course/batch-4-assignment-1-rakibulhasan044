const countWordOccurrences = (sentence: string, word: string): number => {
    const count: number = (sentence.match(new RegExp(word, 'gi')) || []).length
    return count
}


const result3 = countWordOccurrences('TypeScript is great. I love TypeScript! typeScript', 'TypeScript')
console.log(result3);