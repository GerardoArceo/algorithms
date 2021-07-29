const palindromePermutation = (str: String) => {
    str = str.toLowerCase().replaceAll(' ', '')
    let hash = {};
    let countOdd = 0
    for (const char of str) {
        hash[char] = !hash[char]
        countOdd += hash[char] ? 1 : -1
    }
    return countOdd <= 1;
}
console.log(palindromePermutation('Tact Coa'))
console.log(palindromePermutation('Tact Coah'))

const palindromePermutationWithBitVector = (str: String) => {
    str = str.toLowerCase().replaceAll(' ', '')
    let bitVector = 0
    for (const char of str) 
        bitVector ^= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0))
    return bitVector == 0 || (bitVector & (bitVector - 1)) == 0
}
console.log(palindromePermutationWithBitVector('Tact Coa'))
console.log(palindromePermutationWithBitVector('Tact Coah'))


