import React from 'react'
import '../css/matrix.css'


export class Matrix extends React.Component {
    handleInput(event, row, col) {
        const val = event.target.value

        if(isNaN(val)) {
            alert('Invalid Number')
        } else {
            this.props.changeEntries(row, col, val)
        }
    }

    makeEntry(r, c) {
        return <th>
                <input type='text' 
                pattern='[0-9]*' 
                value={this.props.matrix[r][c]} 
                size={3}
                disabled = {this.props.readOnly} 
                onInput={event => this.handleInput(event, r, c)}
                class='matrix-field'/>
            </th>    
    }

    render() {
        const rows = []

        for (let r = 0; r < this.props.matrix.length; r++) {
            const cols = []

            for (let c = 0; c < this.props.matrix[0].length; c++) {
                cols.push(this.makeEntry(r, c))          
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