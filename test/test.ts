const p = '*ABCa*aaa*a*DE.*2'
const regex = Array.from(p)
while (regex.length > 0) {
    const char = regex.shift()
    console.log(regex[0])
}