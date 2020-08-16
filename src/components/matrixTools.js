import React from 'react'
import { createMatrix, addMatrices } from '../scripts/matrix_functions'
import {Matrix} from './matrix'
import '../css/matrix-tools.css'


class SizeSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {inputValueMatrix: createMatrix(props.size, 2, 2)}
    }

    handleChange(event, rowIndex, colIndex) {
        const inputValueMatrix = this.state.inputValueMatrix
        inputValueMatrix[rowIndex][colIndex] = event.target.value
        this.setState({inputValueMatrix: inputValueMatrix})

    }

    makeSelectorEntry(index) {
        const inputValues = this.state.inputValueMatrix[index]

        return <p>
            {'Matrix ' + index + ': '} 
            <input id={index + 'row'} type='number' value={inputValues[0]} onChange={event => this.handleChange(event, index, 0)} size='3'/> Rows, and &nbsp; 
            <input id={index + 'col'} type='number' value={inputValues[1]} onChange={event => this.handleChange(event, index, 1)} size='3'/> Columns
        </p>
    }

    onDoneBtnClick() {
        for (let i = 0; i < this.props.size; i++) {
            const inputValues = this.state.inputValueMatrix[i]
            this.props.setSize(i, inputValues[0], inputValues[1])
        }

        this.props.nextState()
    }

    render() {
        const lines = []

        for (let i = 0; i < this.props.size; i++) {
            lines.push(this.makeSelectorEntry(i))        
        }

        return (<>
            {lines}
            <button onClick={this.onDoneBtnClick.bind(this)}>Done</button>
        </>)
    }
}



export class MatrixTools extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            calState : 1,
            nbrOfMatrices : 2,
            matrices: new Array(2)
        }
    }

    setSize(index, nbrOfRows, nbrOfCols) {
        const matrices = this.state.matrices
        matrices[index] = createMatrix(nbrOfRows, nbrOfCols, 0)
        this.setState({matrices: matrices})
    }

    nextState() {
        this.setState({calState: this.state.calState + 1})
    }

    render() {
        switch(this.state.calState) {
            case 1:
                return <SizeSelector size='2' setSize={(i,r,c) => this.setSize(i,r,c)} nextState={this.nextState.bind(this)}/>
            case 2:
                return <h1>Matrices</h1>
            default:
                return <h1>Error</h1>
        }
    }
}