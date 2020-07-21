import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import {Navbar, NavbarItem} from './components/navbar'
import {Calulcator} from './components/calculator'
import './css/index.css'


const foter = (
        <h1>By Isak Evaldsson</h1>
    )


function About() {
    return (
        <ul>
        <li>Github</li>
        <li>LinkedIn</li>
        <li>Contact Me</li>
    </ul>
    )
}   


function Header() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Calc</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
      </header>
    );
}

ReactDOM.render(
    <BrowserRouter>
        <Header/>
        <main>
            <Switch>
                <Route exact path='/' component={Calulcator}/>
                <Route exact path='/about' component={About}/>
            </Switch>
        </main>
        {foter}
    </BrowserRouter>,
    document.getElementById('root')
);