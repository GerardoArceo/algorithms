const isSubstring = (s1: string, s2: string) => {
    const bigString = s1.length >= s2.length ? s1 : s2;
    const littleString = s1.length < s2.length ? s1 : s2;

    let index = 0
    for (const char of bigString)
        if (char === littleString[index]) {
            index++
            if (index === littleString.length) return true
        } else {
            index = 0
            if (char === littleString[index]) index = 1
        }
    return false
}
console.log(isSubstring('aabcxbx', 'abc')) //true

const stringRotation = (s1: string, s2: string) => s1.length == s2.length && isSubstring(s1, s2+s2)

console.log(stringRotation('waterbottle', 'erbottlewat')) //true
console.log(stringRotation('bobo', 'obob')) //true
console.log(stringRotation('hola', 'aloh')) //false
console.log(stringRotation('bobo', 'bbob')) //false
console.log(stringRotation('XYYXX', 'XXYYX')) //true
console.log(stringRotation('XYYXX', 'XXYYX')) //true


