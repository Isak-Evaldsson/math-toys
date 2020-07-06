import React from 'react';
import ReactDOM from 'react-dom';
import {parse} from './parser.js'
import './index.css'

class Calulcator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            expr : ''
        }
    }

    createOperatorButton(operator, type = 'numBtn') {
        return (
        <button class={type} onClick={() => {
            const newExpr = this.state.expr + operator
            this.setState({expr: newExpr})
        }}>
            {operator}
        </button>
        )
    }

    createFunctionButton(lambda, sign, type='opBtn') {
        return (
            <button class={type} onClick={lambda}>
                {sign}
            </button>
        )
    }
   
    render() {
        const caluclate = () => this.setState({expr: parse(this.state.expr).toString(10)})
        const clear = () => this.setState({expr: this.state.expr.substring(0, this.state.expr.length - 1)})

        return (
            <div>
                
                <div id="labelDiv">
                <label>{this.state.expr}</label>
                </div>
                <div>
                    {this.createOperatorButton('(', 'opBtn')}
                    {this.createOperatorButton(')', 'opBtn')}
                    {this.createFunctionButton(clear, 'CE')}
                </div>
                <div>
                    {this.createOperatorButton('7')}
                    {this.createOperatorButton('8')}
                    {this.createOperatorButton('9')}
                    {this.createOperatorButton('*', 'opBtn')}
                </div>
                <div>
                    {this.createOperatorButton('4')}
                    {this.createOperatorButton('5')}
                    {this.createOperatorButton('6')}
                    {this.createOperatorButton('/', 'opBtn')}
                </div>
                <div>
                    {this.createOperatorButton('1')}
                    {this.createOperatorButton('2')}
                    {this.createOperatorButton('3')}
                    {this.createOperatorButton('-', 'opBtn')}
                </div>
                <div>
                    {this.createOperatorButton('0')}
                    {this.createOperatorButton('.')}
                    {this.createFunctionButton(caluclate, '=', 'eqBtn')}
                    {this.createOperatorButton('+')}
                </div>
            </div>
           
        );
    }
}

ReactDOM.render(
    <Calulcator/>,
    document.getElementById('root')
);