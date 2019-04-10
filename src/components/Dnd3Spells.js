import React from 'react';
// import {NavLink} from "react-router-dom";

import dnd3bardspells from "../assets/images/dnd3bardspells.jpg"
import dnd3clericspells from "../assets/images/dnd3clericspells.jpg"
import dnd3druidspells from "../assets/images/dnd3druidspells.jpg"
import dnd3paladinspells from "../assets/images/dnd3paladinspells.jpg"
import dnd3rangerspells from "../assets/images/dnd3rangerspells.jpg"

export class Dnd3Spells extends React.Component {



    render(){
        
        return(
            <div className="adnd">
            <a href="https://forgottenrealms.fandom.com/wiki/Category:Bard_spells_(3e)"><img src={dnd3bardspells} alt="dnd3bard" /></a>
            <h3>Bard Spells</h3>
            <hr />
            <a href="https://forgottenrealms.fandom.com/wiki/Category:Cleric_spells_(3e)"><img src={dnd3clericspells} alt="dnd3cleric" /></a>
            <h3>Cleric Spells</h3>
            <hr />
            <a href="https://forgottenrealms.fandom.com/wiki/Category:Druid_spells_(3e)"><img src={dnd3druidspells} alt="dnd3cleric" /></a>
            <h3>Druid Spells</h3>
            <hr />
            <a href="https://forgottenrealms.fandom.com/wiki/Category:Paladin_spells_(3e)"><img src={dnd3paladinspells} alt="dnd3cleric" /></a>
            <h3>Paladin Spells</h3>
            <hr />
            <a href="https://forgottenrealms.fandom.com/wiki/Category:Ranger_spells_(3e)"><img src={dnd3rangerspells} alt="dnd3cleric" /></a>
            <h3>Ranger Spells</h3>
            <hr />
            {/* <NavLink activeClassName="active" to="https://forgottenrealms.fandom.com/wiki/Category:Wizard_spells_(2e)"><img src={adndwizardspells} alt="adndclasses" /></NavLink>
            <h3>Wizard Spells</h3>
            <hr />
            <NavLink activeClassName="active" to="https://forgottenrealms.fandom.com/wiki/Category:Cleric_spells_(2e)"><img src={adndclericspells} alt="adndmonsters" /></NavLink>
            <h3>Cleric Spells</h3>
            <hr />
            <NavLink activeClassName="active" to="https://forgottenrealms.fandom.com/wiki/Category:Druid_spells_(2e)"><img src={adnddruidspells} alt="adndspells" /></NavLink>
            <h3>Druid Spells</h3>
            <hr />
            <NavLink activeClassName="active" to="https://forgottenrealms.fandom.com/wiki/Category:Shaman_spells_(2e)"><img src={adndshamanspells} alt="adnditems" /></NavLink>
            <h3>Shaman Spells</h3>
            <hr /> */}

            </div>
        )
    }
}