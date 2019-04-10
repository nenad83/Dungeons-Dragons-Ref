import React from 'react';
import {NavLink} from "react-router-dom";
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'

import logo from "../assets/images/logo.png"

export class Header extends React.Component {
    render(){
        return(
            <div class="container" id="header">   
            <img src={logo} alt="logo"/> <br />                                     
            <Dropdown>
                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                        Menu
                    </Dropdown.Toggle>

                    <Dropdown.Menu id="dropdown-li">
                        <Dropdown.Item href="#/action-1"><NavLink activeClassName="active" to="/"><span>HOME</span></NavLink></Dropdown.Item>
                        <hr />
                        <Dropdown.Item href="#/action-2"><NavLink activeClassName="active" to="/diceroller"><span>DICE ROLLER</span></NavLink></Dropdown.Item>
                        <hr />
                        <Dropdown.Item href="#/action-3"><NavLink activeClassName="active" to="/names"><span>NAME GENERATOR</span></NavLink></Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
            <hr className="menu-hr" />
                </div>

        )
    }
}