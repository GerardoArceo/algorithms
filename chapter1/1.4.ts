//1.4
const palindromePermutation = (str: String) => {
    str = str.toLowerCase()
    let isPalindromePermutation = true;
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
        }
    }
    let numOddsRepeats = 0;
    for (let numCharRepeats of Object.values(obj)) {
        if (Number(numCharRepeats) % 2 !== 0) {
            numOddsRepeats++;
            if (numOddsRepeats > 1) {
                isPalindromePermutation = false;
                break;
            } 
        }
    }
    return isPalindromePermutation;
}
console.log(palindromePermutation('Tact Coa'))
console.log(palindromePermutation('Tact Coah'))