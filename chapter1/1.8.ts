const zeroMatrix = (matrix: Number[][]) => {
    var zeroRow = Array<number>(matrix[0].length).fill(0);
    const zeroCells = []
    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix[i].length; j++)
            if (matrix[i][j] === 0)
                zeroCells.push({row: i, col: j})
    for (const cell of zeroCells) {
        matrix[cell.row] = zeroRow;
        for (let i = 0; i < matrix.length; i++)
            matrix[i][cell.col] = 0;
    }
    return matrix
}
const matrix2 = [
    [0, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21],
    [0, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33],
]
// console.log(zeroMatrix(matrix2))

const zeroMatrix2 = (matrix: Number[][]) => {
    var zeroRow = Array<number>(matrix[0].length).fill(0);
    const zeroRows = {}
    const zeroCols = {}
    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix[i].length; j++) 
            if (matrix[i][j] === 0)
                zeroRows[i] = true, zeroCols[j] = true;
    for (const row in zeroRows) 
        matrix[row] = zeroRow;
    for (const col in zeroCols)
        for (let i = 0; i < matrix.length; i++) 
            matrix[i][col] = 0;
    return matrix
}
// console.log(zeroMatrix2(matrix2))

const zeroMatrix3 = (matrix: Number[][]) => {
    let firstRowIsZero = false
    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix[i].length; j++) 
            if (matrix[i][j] === 0){
                matrix[0][j] = 0, matrix[i][0] = 0
                if (i === 0) firstRowIsZero = true
            }
    
    for (let row = 1; row < matrix.length; row++) //set rows to 0
        if (matrix[row][0] === 0)
            for (let j = 0; j < matrix[0].length; j++)
                matrix[row][j] = 0;
    for (let col = 0; col < matrix[0].length; col++) //set cols to 0
        if (matrix[0][col] === 0)
            for (let j = 0; j < matrix.length; j++)
                matrix[j][col] = 0;

    if (firstRowIsZero)
        for (let j = 0; j < matrix[0].length; j++)
            matrix[0][j] = 0;

    return matrix
}
console.log(zeroMatrix3(matrix2))