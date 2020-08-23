import React from 'react'
import '../css/matrix.css'

class MatrixField extends React.Component {
    onChange(event) {
        const inputVal = event.target.value

        if(!isNaN(inputVal)) {
            const val = inputVal.length !== 0 ? parseInt(inputVal): undefined
            this.props.matrix.setValue(this.props.row, this.props.col, val)
        }
    }

    getValueFromMatrix() {
        return this.props.matrix.getValue(this.props.row, this.props.col)
    }

    render () {
        return (
            <input type='text'
            class='matrix-field' 
            value={this.getValueFromMatrix()} 
            size={3}
            disabled = {this.props.readOnly} 
            onChange = {this.onChange.bind(this)}/>
        )
    } 
}

export class MatrixComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            matrix : this.props.matrix
        }
    }

    getValue(row, col) {
        return this.state.matrix[row][col]
    }

    setValue(row, col, value) {
        const matrix = this.state.matrix
        matrix[row][col] =  value
        
        this.setState({
            matrix: matrix
        })
    }

    render() {
        const rows = []

        for (let r = 0; r < this.state.matrix.length; r++) {
            const cols = []

            for (let c = 0; c < this.state.matrix[0].length; c++) {
                cols.push(<th>
                    <MatrixField row={r} col={c} matrix={this}/>
                </th>)          
            }

            rows.push(<tr>{cols}</tr>) 
        }

        return (
            <div id = "matrix-divider">
                {this.props.title}
                <table>{rows}</table>
            </div>)
    }
}