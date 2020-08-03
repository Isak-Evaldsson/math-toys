import React from 'react'


class Matrix extends React.Component {
    constructor(props) {
        super(props)
        const rows = props.rows !== undefined ? props.rows : 2
        const cols = props.cols !== undefined ? props.cols : 2
        
        var matrix = [];
        for(var i=0; i<rows; i++) {
            matrix[i] = new Array(cols);
        }   

        this.state = {matrix: matrix}
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

    render() {
        return (
            <Matrix/>
        )
    }
}