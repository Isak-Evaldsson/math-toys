function createMatrix(nbrOfRows, nbrOfCols, defaultValue = undefined) {
    const matrix = [];

    for(var i=0; i<nbrOfRows; i++) {
        matrix[i] = new Array(nbrOfCols).fill(defaultValue);
    }   

    return matrix
}

function addMatrices(a, b) {
    if(a.length === 0 || b.length === 0) {
        throw new Error("Can't add empty matrices")
    } else if (a.length !== b.length || a[0].length !== b[0].length) {
        throw new Error("Can't add matrices of different size.")        
    }
    
    const res = createMatrix(a.length, a[0].length, 0)

    for (let row = 0; row < res.length; row++) {
        for (let col = 0; col < res[0].length; col++) {
            res[row][col] = a[row][col] + b[row][col]
        }
    }

    return res
}

export {createMatrix, addMatrices}