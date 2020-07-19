import React from 'react'
import '../css/navbar.css'


const defaultColor = '#85144b'

class Navbar extends React.Component {
    render () {
        return (
            <div id='navbar' style={{background: defaultColor}}>
                <h3 id='navbar-title'>{this.props.title + ' '}</h3>
                {this.props.children}
            </div>
        )
    }
}

function NavbarItem(props) {
    return (
        <button class='navbar-item' onClick={props.onClick}> 
            {props.title}
        </button>
    )
}

export {Navbar, NavbarItem}