const URLify = (str: String) => {
    return str.replaceAll(' ', '%20');
}
console.log(URLify('Hola mundo '))

const URLify2 = (str: String) => {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            newStr += '%20';
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(URLify('Hola mundo '))