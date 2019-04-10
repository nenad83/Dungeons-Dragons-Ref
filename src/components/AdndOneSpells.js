import React from 'react';
// import {NavLink} from "react-router-dom";

import adndwizardspells from "../assets/images/adndonewizardspells.jpg"
import adndclericspells from "../assets/images/adndoneclericspells.jpg"
import adnddruidspells from "../assets/images/adndonedruidspells.jpg"
import adndillusionistspells from "../assets/images/adndoneillusionistspells.jpg"

export class AdndOneSpells extends React.Component {



    render(){
        
        return(
            <div className="adnd">
            <a href="https://forgottenrealms.fandom.com/wiki/Category:Magic-user_spells_(1e)"><img src={adndwizardspells} alt="adndclasses" /></a>
            <h3>Magic-User Spells</h3>
            <hr />
            <a href="https://forgottenrealms.fandom.com/wiki/Category:Cleric_spells_(1e)"><img src={adndclericspells} alt="adndmonsters" /></a>
            <h3>Cleric Spells</h3>
            <hr />
            <a href="https://forgottenrealms.fandom.com/wiki/Category:Druid_spells_(1e)"><img src={adnddruidspells} alt="adndspells" /></a>
            <h3>Druid Spells</h3>
            <hr />
            <a href="https://forgottenrealms.fandom.com/wiki/Category:Illusionist_spells_(1e)"><img src={adndillusionistspells} alt="adnditems" /></a>
            <h3>Illusionist Spells</h3>
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