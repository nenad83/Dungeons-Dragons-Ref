import React from 'react';
import {NavLink} from "react-router-dom";

import logo from "../assets/images/logo.png"

export class Header extends React.Component {
    render(){
        return(
            <div className="header" >
            
            <img src={logo} alt="logo"/> <br />
                
            
                 <NavLink activeClassName="active" to="/"><span>HOME</span></NavLink>
                 <hr />
                      
                 <NavLink activeClassName="active" to="/diceroller"><span>DICE ROLLER</span></NavLink>
                 <hr />
                        
                 <NavLink activeClassName="active" to="/names"><span>NAME GENERATOR</span></NavLink>
                       
                
            </div>
        )
    }
}