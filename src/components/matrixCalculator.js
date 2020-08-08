import React from 'react'
import { createMatrix, addMatrices } from '../scripts/matrix_functions'
import {Matrix} from './matrix'

export class MatrixCalculator extends React.Component {
    constructor(props) {
        super(props)
        const matrices = {
            A: createMatrix(2,2,1), 
            B: createMatrix(2,2,2),
            C: createMatrix(2,2)
        }
    
        this.state = {matrices: matrices}
    }


    createMatrixComponent(key, readOnly = false) {
        const changeEntries = (row, col, val) => {
            const matrices = this.state.matrices
            matrices[key][row][col] = val.length !== 0 ? parseInt(val): undefined
            this.setState(matrices)
        }

        return <Matrix 
            matrix = {this.state.matrices[key]} 
            changeEntries = {changeEntries} 
            readOnly = {readOnly}/>
    }

    render() {
        const add = () => {
            const matrices = this.state.matrices
            matrices.C = addMatrices(matrices.A, matrices.B)
            this.setState({matrices: matrices})
        }

        return (
            <div>
                A: {this.createMatrixComponent('A')}
                B: {this.createMatrixComponent('B')}
                C = A + B: 
                {this.createMatrixComponent('C', true)}
                <button onClick={add}>
                    Calculate
                </button>
            </div>
        )
    }
}