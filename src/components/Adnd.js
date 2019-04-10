import React from 'react';
import {NavLink} from "react-router-dom";

import adndmonsters from "../assets/images/adndmonsters3.jpg"
import adndclasses from "../assets/images/adndclasses.jpg"
import adndkits from "../assets/images/adndkits.jpg"
import adndspells from "../assets/images/adndspells.jpg"
import adnditems from "../assets/images/adnditems.jpg"

export class Adnd extends React.Component {



    render(){
        
        return(
            <div className="adnd">
            <NavLink activeClassName="active" to="/adndclasses"><img src={adndclasses} alt="adndclasses" /></NavLink>
            <h3>Classes</h3>
            <hr />
            <NavLink activeClassName="active" to="/adndkits"><img src={adndkits} alt="adndclasses" /></NavLink>
            <h3>Kits</h3>
            <hr />
            <NavLink activeClassName="active" to="/adndmonsters"><img src={adndmonsters} alt="adndmonsters" /></NavLink>
            <h3>Monsters</h3>
            <hr />
            <NavLink activeClassName="active" to="/adndspells"><img src={adndspells} alt="adndspells" /></NavLink>
            <h3>Spells</h3>
            <hr />
            <NavLink activeClassName="active" to=""><img src={adnditems} alt="adnditems" /></NavLink>
            <h3>Items</h3>
            <hr />

            </div>
        )
    }
}