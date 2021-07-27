const isUniqueWithHash = (str: String) => {
    let isUnique = true;
    let obj = {};
    for (const char of str) {
        if (obj[char]) {
            isUnique = false;
            break;
        }
        obj[char] = true   
    }
    return isUnique;
}
console.log(isUniqueWithHash('Hola mundo'))
console.log(isUniqueWithHash('Hola mundi'))

const isUniqueWithBitVector = (str: String) => {
    let isUnique = true;
    let checker = 0;
    for (const char of str) {
        const val: number = char.charCodeAt(0) - 'a'.charCodeAt(0)
        if (checker & (1 << val)) {
            isUnique = false;
            break;
        }
        checker |= 1 << val;
    }
    return isUnique;
}
console.log(isUniqueWithBitVector('holamundo'))
console.log(isUniqueWithBitVector('holamundi'))

const isUniqueWithoutDataStructures = (str: String) => {
    let isUnique = true;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                isUnique = false;
                break;
            }
        }
    }
    return isUnique;
}
console.log(isUniqueWithoutDataStructures('Hola mundo'))
console.log(isUniqueWithoutDataStructures('Hola mundi'))

