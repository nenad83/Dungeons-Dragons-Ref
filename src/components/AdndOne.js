import React from 'react';
import {NavLink} from "react-router-dom";

import adndmonsters from "../assets/images/adndonemonsters.jpg"
import adndclasses from "../assets/images/adndoneclasses.jpg"
import adndspells from "../assets/images/adndonespells.jpg"
import adnditems from "../assets/images/adnditems.jpg"

export class AdndOne extends React.Component {



    render(){
        
        return(
            <div className="adnd">
            <NavLink activeClassName="active" to="/adndoneclasses"><img src={adndclasses} alt="adndclasses" /></NavLink>
            <h3>Classes</h3>
            <hr />
            <a href="http://www.lomion.de/cmm/_index.php"><img src={adndmonsters} alt="dnd3cleric" /></a>
            <h3>Monsters</h3>
            <hr />
            <NavLink activeClassName="active" to="/adndonespells"><img src={adndspells} alt="adndspells" /></NavLink>
            <h3>Spells</h3>
            <hr />
            <NavLink activeClassName="active" to=""><img src={adnditems} alt="adnditems" /></NavLink>
            <h3>Items</h3>
            <hr />

            </div>
        )
    }
}