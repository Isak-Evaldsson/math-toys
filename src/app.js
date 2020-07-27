import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Navbar, NavbarItem} from './components/navbar'
import {Calulcator} from './components/calculator'
import './css/app.css'

const foter = (
    <h1>By Isak Evaldsson</h1>
)


function About() {
    return (
        <ul>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>Contact Me</li>
    </ul>)
}   

function Header() {
    return (
    <Navbar title='Math Toys'>
        <NavbarItem title='Caluclator' link='/'/>
        <NavbarItem title='About' link='/about'/>
    </Navbar>);
}

export function App() {
    return(
    <BrowserRouter>
        <Header/>
        <main>
            <Switch>
                <Route exact path='/' component={Calulcator}/>
                <Route exact path='/about' component={About}/>
            </Switch>
        </main>
        {foter}
    </BrowserRouter>);
}