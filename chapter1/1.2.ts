const checkPermutation = (str1: String, str2: String) => {
    let sortedString1 = Array.from(str1).sort().join('');
    let sortedString2 = Array.from(str2).sort().join('');
    const isPermutation = sortedString1 === sortedString2
    return isPermutation;
} 
console.log(checkPermutation('Hola mundo', 'mundo Hola'))
console.log(checkPermutation('Hola mundi', 'Mundo 123'))

const checkPermutationWithHash = (str1: String, str2: String) => {
    if (str1.length !== str2.length) return false;
    const hash = {};
    for (const char of str1) {
        hash[char] = (hash[char] || 0) + 1;
    }
    for (const char of str2) {
        hash[char] = (hash[char] || 0) - 1;
        if (hash[char] < 0) return false
    }
    return true;
}
console.log(checkPermutationWithHash('Hola mundo', 'mundo Hola'))
console.log(checkPermutationWithHash('Hola mundi', 'Mundo 123'))