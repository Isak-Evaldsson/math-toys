import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavbarItem} from './components/navbar'
import {Calulcator} from './components/calculator'
import './css/index.css'


ReactDOM.render(
    <div>
        <Navbar title='Math Toys'>
            <NavbarItem title='Calculator'/>
            <NavbarItem title='Matrix Tools'/>
            <NavbarItem title='About'/>
        </Navbar>
        <Calulcator/>
    </div>,
    document.getElementById('root')
);