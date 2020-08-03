function createMatrix(nbrOfRows, nbrOfCols) {
    const matrix = [];

    for(var i=0; i<nbrOfRows; i++) {
        matrix[i] = new Array(nbrOfCols);
    }   

    return matrix
}

export {createMatrix}