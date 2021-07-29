const oneAway = (str1: string, str2: string) => {
    const lengthDif = Math.abs(str1.length - str2.length)
    if (lengthDif > 1) return false
    let foundDifference = false
    
    for (let index1 = 0, index2 = 0; index1 < str1.length && index2 < str2.length; index1++, index2++) {
        if (str1[index1] != str2[index2]) {
            if (foundDifference) return false
            foundDifference = true

            if (index1 + 1 < str1.length && str1[index1 + 1] == str2[index2]) index1++
            else if (index2 + 1 < str2.length &&  str1[index1] == str2[index2 + 1]) index2++
        }
    }
    return true
}
console.log(oneAway('pale', 'ple'))
console.log(oneAway('pales', 'pale'))
console.log(oneAway('pale', 'bale'))
console.log(oneAway('pale', 'bae'))
console.log(oneAway('aaabxaa', 'aaaxbaa'))
