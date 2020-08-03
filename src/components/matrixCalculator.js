import React from 'react'
import { createMatrix } from '../scripts/matrix_functions'


class Matrix extends React.Component {
    constructor(props) {
        super(props)
        const rows = props.rows !== undefined ? props.rows : 2
        const cols = props.cols !== undefined ? props.cols : 2

        this.state = {matrix: createMatrix(rows, cols)}
    }

    handleInput(event, row, col) {
        const val = event.target.value

        if(isNaN(val)) {
            alert('Invalid Number')
        } else {
            const matrix = this.state.matrix
            matrix[row][col] = val.length !== 0 ? parseInt(val): undefined
            this.setState({ matrix: matrix })
        }
    }

    makeEntry(r, c) {
        return <th>
                <input type='text' 
                pattern='[0-9]*' 
                value={this.state.matrix[r][c]} 
                size={3}
                disabled = {this.props.readOnly} 
                onInput={event => this.handleInput(event, r, c)}/>
            </th>    
    }

    render() {
        const rows = []

        for (let r = 0; r < this.state.matrix.length; r++) {
            const cols = []

            for (let c = 0; c < this.state.matrix[0].length; c++) {
                cols.push(this.makeEntry(r, c))          
            }

            rows.push(<tr>{cols}</tr>) 
        }

        return <table>{rows}</table>
    }
}


export class MatrixCalculator extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                A: <Matrix/>
                B: <Matrix/>
                A + B: <Matrix readOnly = {true}/>
                <button onClick={() => alert('Not implemented yet')}>
                    Calculate
                </button>
            </div>
        )
    }
}