const isSubstring = (str1: string, str2: string) => {
    const bigString = str1.length >= str2.length ? str1 : str2;
    const littleString = str1.length < str2.length ? str1 : str2;

    let index = 0
    for (const char of bigString)
        if (char === littleString[index]) {
            if (++index === littleString.length) return true
        } else {
            index = 0
            if (char === littleString[index]) ++index
        }
    return false
}
console.log(isSubstring('aabcxbx', 'abc')) //true

const stringRotation = (str1: string, str2: string) => {
    if (str1.length != str2.length) return false
    return isSubstring(str1, str2 + str2)
}
console.log(stringRotation('waterbottle', 'erbottlewat')) //true
console.log(stringRotation('SSSTRING1SSSSTRING2', 'SSSTRING2SSSTRING1S')) //true
console.log(stringRotation('bobo', 'obob')) //true
console.log(stringRotation('hola', 'aloh')) //false
console.log(stringRotation('bobo', 'bbob')) //false
console.log(stringRotation('XYYXX', 'XXYYX')) //true

