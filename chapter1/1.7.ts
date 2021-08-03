const rotateMatrix = (matrix: any[][]) => {
    const rotatedMatrix = []
    const rowLength = matrix[0].length
    for (let j = 0; j < rowLength; j++) {
        const newRow = []
        for (let i = matrix.length - 1; i >= 0; i--) {
            const row = matrix[i];
            newRow.push(row[j])
        }
        rotatedMatrix.push(newRow)
    }
    return rotatedMatrix
}
const matrix = [
    ['a', 'b', 'c', 'd', 'e', 'f'],
    ['g', 'h', 'i', 'j', 'k', 'l'],
    ['m', 'n', 'o', 'p', 'q', 'r'],
    ['s', 't', 'u', 'v', 'w', 'x'],
]
console.log(rotateMatrix(matrix))

const rotateSquareMatrix = (matrix: any[][]) => {
    if (matrix.length !== matrix[0].length) return

    const numberOfLayers = Math.ceil(matrix.length/2)
    for (let firstLayer = 0; firstLayer < numberOfLayers; firstLayer++) {
        const endLayer = matrix.length - 1 - firstLayer
        for (let i = 0; i < endLayer - firstLayer; i++) {
            const onward = firstLayer + i
            const backward = endLayer - i

            const top = matrix[firstLayer][backward]
            matrix[firstLayer][backward] = matrix[onward][firstLayer] //top = left
            matrix[onward][firstLayer] = matrix[endLayer][onward] //left = bottom
            matrix[endLayer][onward] = matrix[backward][endLayer] //bottom = right
            matrix[backward][endLayer] = top // right = top
        }        
    }
    return matrix
}
const squareMatrix = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', 'i', 'j'],
    ['k', 'l', 'm', 'n', 'o'],
    ['p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x', 'y'],
]
console.log(rotateSquareMatrix(squareMatrix))
