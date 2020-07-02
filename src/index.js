import React from 'react';
import ReactDOM from 'react-dom';
import {parse} from './parser.js'

class Calulcator extends React.Component {
    calculate() {
        let exprValue = document.getElementById('exprField').value;
        alert(parse(exprValue))    
    }

    render() {
        return (
            <div>
                <h1>My Calulcator</h1>
                <input type='text' placeholder='Enter expression' id='exprField'/>
                <button onClick = {() => this.calculate()}> Caluclate </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Calulcator/>,
    document.getElementById('root')
);