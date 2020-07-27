import React from 'react'
import { useHistory } from "react-router-dom";
import '../css/navbar.css'


const defaultColor = '#85144b'

class Navbar extends React.Component {
    render () {
        return (
            <header>
                <div id='navbar' style={{background: defaultColor}}>
                    <h3 id='navbar-title'>{this.props.title + ' '}</h3>
                    {this.props.children}
                </div>
            </header>
            
        )
    }
}

function NavbarItem(props) {
    let history = useHistory()

    return (
        <button class='navbar-item' onClick={() => history.push(props.link)}> 
            {props.title}
        </button>
    )
}

export {Navbar, NavbarItem}