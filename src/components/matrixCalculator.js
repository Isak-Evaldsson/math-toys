import React from 'react'

export class MatrixCalculator extends React.Component {
    buildTable(row, col, intialValue) {
        const rows = []

        for (let i = 0; i < row; i++) {
            const cols = []

            for (let j = 0; j < col; j++) {
            cols.push(<th>{intialValue}</th>)          
            }

            rows.push(<tr>{cols}</tr>) 
        }

        return <table>{rows}</table>
    }


    render() {
        return (
            <div>
                {this.buildTable(2,2, 1)}
                +
                {this.buildTable(2,2, 2)}
                =
                {this.buildTable(2,2, 3)}
            </div>
        )
    }
}