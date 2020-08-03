function createMatrix(nbrOfRows, nbrOfCols, defaultValue = undefined) {
    const matrix = [];

    for(var i=0; i<nbrOfRows; i++) {
        matrix[i] = new Array(nbrOfCols).fill(defaultValue);
    }   

    return matrix
}

export {createMatrix}