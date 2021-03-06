import React from 'react'
import { createMatrix } from '../scripts/matrix_functions'
import {MatrixComponent} from './matrix'
import '../css/matrix-tools.css'


class MatrixSizeSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {inputValueMatrix: createMatrix(props.size, 2, 2)}
    }

    handleChange(event, rowIndex, colIndex) {
        const inputValueMatrix = this.state.inputValueMatrix
        const value = event.target.value
        
        if(!isNaN(value) && parseInt(value) >= 0) {
            inputValueMatrix[rowIndex][colIndex] = parseInt(value)
            this.setState({inputValueMatrix: inputValueMatrix})
        }
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

class MatrixViewer extends React.Component {
    render() {
        const components = []

        for (let index = 0; index < this.props.matrices.length; index++) {
            const changeEntries = (row, col, val) => this.props.changeMatrixEntry(index, row, col, val)

            components.push(
                <MatrixComponent matrix={this.props.matrices[index]} title= {'Matrix ' + index + ': '} changeEntries={changeEntries}/>
            )
        }

        return <>
            <div class='matrix-container'>
                {components}
            </div>
            <div>
            <button onClick={() => this.props.nextState()}>Calculate</button>
            <button onClick={() => this.props.prevState()}>Back</button>
            </div>
         </>   
    }
}

export class MatrixTools extends React.Component {
    constructor(props) {
        super(props)
        const nbrOfMatrices = props.nbrOfMatrices

        this.state = {
            calState : 1,
            nbrOfMatrices : nbrOfMatrices,
            matrices: []
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

    prevState() {
        this.setState({calState: this.state.calState - 1})
    }


    calculateResult() {
        const newCalBtn= <button onClick={() => this.setState({calState: 1})}>New calculation</button>

        try {
            return <>
                <MatrixComponent matrix={this.props.operation(this.state.matrices)} readOnly={true} title='Result'/>
                {newCalBtn}
            </>   
        }
        catch(err) {
            return <>
                <p>{err.message}</p>
                {newCalBtn}
                <button onClick={() => this.prevState()}>Edit calculation</button></>
        }
    }

    render() {
        switch(this.state.calState) {
            case 1:
                return <MatrixSizeSelector size={this.state.nbrOfMatrices} setSize={(i,r,c) => this.setSize(i,r,c)} nextState={this.nextState.bind(this)}/>
            case 2:
                return <MatrixViewer matrices={this.state.matrices} nextState={this.nextState.bind(this)}  prevState={this.prevState.bind(this)}/>
            case 3:
                return this.calculateResult()
            default:
                return <h1>Error</h1>
        }
    }
}