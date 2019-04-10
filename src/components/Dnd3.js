import React from 'react';
import {NavLink} from "react-router-dom";

import dnd3monsters from "../assets/images/dnd3monsters.jpg"
import dnd3classes from "../assets/images/dnd3classes.jpg"
import dnd3spells from "../assets/images/dnd3spells.jpg"
import dnd3items from "../assets/images/dnd3items.jpg"

export class Dnd3 extends React.Component {
    render(){
        
        return(
            <div className="dnd3">
            <NavLink activeClassName="active" to="/dnd3classes"><img src={dnd3classes} alt="dnd3classes" /></NavLink>
            <h3>Classes</h3>
            <hr />
            <a href="http://www.d20srd.org/indexes/monsters.htm"><img src={dnd3monsters} alt="dnd3cleric" /></a>
            <h3>Monsters</h3>
            <hr />
            <NavLink activeClassName="active" to="/dnd3spells"><img src={dnd3spells} alt="dnd3spells" /></NavLink>
            <h3>Spells</h3>
            <hr />
            <NavLink activeClassName="active" to=""><img src={dnd3items} alt="adnditems" /></NavLink>
            <h3>Items</h3>
            <hr />

            </div>
        )
    }
}