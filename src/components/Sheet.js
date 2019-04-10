import React from 'react';
import {NavLink} from "react-router-dom";

import adnd from "../assets/images/adndlogo.png"
import dnd3 from "../assets/images/dnd3logo.png"
import dnd5 from "../assets/images/dnd5logo.png"

export class Sheet extends React.Component {
    render(){
        return(
            <div className="home">
            <NavLink activeClassName="active" to="/adndsheet"><img src={adnd} alt="adnd" /></NavLink>
            <h3>Advanced Dungeons & Dragons 2e</h3> 
            <br />
            <br />
            <hr />
            <NavLink activeClassName="active" to="/dnd3"><img src={dnd3} alt="dnd3" /></NavLink>
            <h3>Dungeons & Dragons 3.5e</h3> 
            <br />
            <br />
            <hr />
            <NavLink activeClassName="active" to="/dnd5"><img src={dnd5} alt="dnd5" /></NavLink>
            <h3>Dungeons & Dragons 5e</h3> 
            <br />
            <br />
            <hr />

            </div>
        )
    }
}