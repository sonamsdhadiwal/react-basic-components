//Installing npm install @opuscapita/react-responsive-navbar

import React from 'react';
import logo from '../images/logo.png';
import './styling/navbar.css';


class HorizontalNavbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav >
                
                <ul className="navbar--link">
                    <li className="navbar--logo-holder"> <img src={logo} alt="logo" className="navbar--logo"/></li>
                    <li ><a href="./dropdown">Dropdown</a></li>
                    <li ><a href="./checkbox">Checkbox</a></li>
                    <li ><a href="./radiobutton">Radio Button</a></li>
                </ul>
            </nav>
        )
    }
}

export default HorizontalNavbar;