import React from 'react';
import {parse} from '../parser.js'
import '../css/calculator.css'

function CalulcatorBtn(props) {
    return (
        <button onClick={props.onClick} class={"calculatorBtn " + props.class}>
            {props.value}
        </button>
    )
}

export class Calulcator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            expr : ''
        }
    }

    exprAddChar(char) {
        return () => this.setState({expr: this.state.expr + char})
    }

    createCalculatorButton(number, type = "", lambda=null) {
        return (
            <CalulcatorBtn value={number} class={type} onClick={lambda == null ? this.exprAddChar(number): lambda}/>
        )
    }

    render() {
        const caluclate = () => this.setState({expr: parse(this.state.expr).toString(10)})
        const clear = () => this.setState({expr: this.state.expr.substring(0, this.state.expr.length - 1)})

        return (
            <div id='calculatorDiv'>
                <input type="text" id='exprField' value={this.state.expr} readOnly></input>
                <div>
                    {this.createCalculatorButton('(', 'operatorBtn')}
                    {this.createCalculatorButton(')', 'operatorBtn')}
                    {this.createCalculatorButton('CE', 'operatorBtn', clear)}
                    {this.createCalculatorButton('Settings', 'operatorBtn', () => null)}
                </div>
                <div>
                    {this.createCalculatorButton('7')}
                    {this.createCalculatorButton('8')}
                    {this.createCalculatorButton('9')}
                    {this.createCalculatorButton('*', 'operatorBtn')}
                </div>
                <div>
                    {this.createCalculatorButton('4')}
                    {this.createCalculatorButton('5')}
                    {this.createCalculatorButton('6')}
                    {this.createCalculatorButton('/', 'operatorBtn')}
                </div>
                <div>
                    {this.createCalculatorButton('1')}
                    {this.createCalculatorButton('2')}
                    {this.createCalculatorButton('3')}
                    {this.createCalculatorButton('-', 'operatorBtn')}
                </div>
                <div>
                    {this.createCalculatorButton('0')}
                    {this.createCalculatorButton('.')}
                    {this.createCalculatorButton('=', 'equalBtn', caluclate)}
                    {this.createCalculatorButton('+', 'operatorBtn')}
                </div>
            </div>
           
        );
    }
}