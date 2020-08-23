import React from 'react'
import { createMatrix, addMatrices } from '../scripts/matrix_functions'
import {Matrix} from './matrix'
import '../css/matrix.css'


export class MatrixCalculator extends React.Component {
    constructor(props) {
        super(props)
        const matrices = {
            A: createMatrix(2,2,0), 
            B: createMatrix(2,2,0),
            C: createMatrix(2,2)
        }
    
        this.state = {matrices: matrices}
    }


    createMatrixComponent(key, title = "", readOnly = false) {
        const changeEntries = (row, col, val) => {
            const matrices = this.state.matrices
            matrices[key][row][col] = val.length !== 0 ? parseInt(val): undefined
            this.setState(matrices)
        }

        return <Matrix 
            matrix = {this.state.matrices[key]} 
            changeEntries = {changeEntries}
            title = {title} 
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
                <div id='matrix-size'>
                    <p>Matrix A Dimension <input type='number' size='3'/> x <input type='number' size='3'/></p>
                    <p>Matrix B Dimension <input type='number' size='3'/> x <input type='number' size='3'/></p>
                </div>
                <div id = 'matrix-container'>
                    {this.createMatrixComponent('A', 'Matrix A')}
                    {this.createMatrixComponent('B', 'Matrix B')} 
                    {this.createMatrixComponent('C', 'Result Matrix',true)}
                </div>
                <div id = 'matrix-toolbar'>
                    <button onClick={add}>
                        Add
                    </button>
                    <button>
                        Multiply
                    </button>
                    <button>
                        Clear
                    </button>
                </div>
            </div>
            
        )
    }
}