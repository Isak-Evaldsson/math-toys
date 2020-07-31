import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Navbar, NavbarItem} from './components/navbar'
import {Calulcator} from './components/calculator'
import './css/app.css'

function About() {
    return (
        <ul>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Contact Me</li>
        </ul>
    )
}   

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
        <NavbarItem title='About' link='/about'/>
    </Navbar>);
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
                    <Route exact path='/about' component={About}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>);
}