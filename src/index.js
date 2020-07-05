import React from 'react';
import ReactDOM from 'react-dom';
import {parse} from './parser.js'

class Calulcator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            expr : ''
        }
    }

    createCalcButton(operator) {
        return (
        <button onClick={() => {
            const newExpr = this.state.expr + operator
            this.setState({expr: newExpr})
        }}>
            {operator}
        </button>
        )
    }
   
    render() {
        return (
            <div>
                <label>{this.state.expr}</label>
                <div>
                    {this.createCalcButton('7')}
                    {this.createCalcButton('8')}
                    {this.createCalcButton('9')}
                    {this.createCalcButton('*')}
                </div>
                <div>
                    {this.createCalcButton('4')}
                    {this.createCalcButton('5')}
                    {this.createCalcButton('6')}
                    {this.createCalcButton('/')}
                </div>
                <div>
                    {this.createCalcButton('1')}
                    {this.createCalcButton('2')}
                    {this.createCalcButton('3')}
                    {this.createCalcButton('-')}
                </div>
                <div>
                    {this.createCalcButton('0')}
                    {this.createCalcButton('.')}
                    <button onClick = {() => this.setState({expr: parse(this.state.expr)})}>=</button>
                    {this.createCalcButton('+')}
                </div>
            </div>
           
        );
    }
}

ReactDOM.render(
    <Calulcator/>,
    document.getElementById('root')
);