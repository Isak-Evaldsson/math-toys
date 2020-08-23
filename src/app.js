import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Navbar, NavbarItem} from './components/navbar'
import {Calulcator} from './components/calculator'
import {MatrixTools} from './components/matrixTools'
import {addMatrices} from './scripts/matrix_functions'
import './css/app.css'
  
function CalculatorPage() {
    return (
        <div>
            <Calulcator/>
            <p>Planned features:</p>
            <ul>
                <li>History</li>
                <li>Keybindings</li>
                <li>More advanced functions i.e sin/cos, e, log</li>
            </ul>
        </div>
    )
}

function Header() {
    return (
    <Navbar title='Math Toys'>
        <NavbarItem title='Caluclator' link='/'/>
        <NavbarItem title='Matrix Tools' link='/matrix'/>
    </Navbar>);
}

function MatrixPage() {
    const addOP = matrices => addMatrices(matrices[0], matrices[1])

    return <MatrixTools operation={addOP} nbrOfMatrices='2'/>
}

function Footer() {
    return(
        <div id='footer'>
            By Isak Evaldsson. <a href='https://github.com/Isak-Evaldsson/math-toys'>Code@Github</a>
        </div>
    );
}

export function App() {
    return(
    <BrowserRouter>
        <div id="page-container">
            <Header/>
            <div id='content-wrap'>
                <Switch>
                    <Route exact path='/' component={CalculatorPage}/>
                    <Route exact path='/matrix' component={MatrixPage}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>);
}