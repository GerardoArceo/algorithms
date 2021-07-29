const stringCompression = (str: string) => {
    let arrayChar = []
    let lastChar = str[0];
    let countChar = 1;
    for (let i = 1; i < str.length; i++) {
        const char = str[i];
        if (char === lastChar) {
            countChar++
        } else {
            arrayChar.push(lastChar)
            arrayChar.push(countChar)
            lastChar = char;
            countChar = 1;
        }
    }
    arrayChar.push(lastChar)
    arrayChar.push(countChar)
    const newString = arrayChar.join('')
    return newString.length > str.length ? str : newString;
}
console.log(stringCompression("aaaabbbc"))