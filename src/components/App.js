import React from 'react';
import {Route} from "react-router-dom";

import { Header } from './Header';
import { Home } from './Home';

import { AdndMonsters } from './AdndMonsters';
import { AdndMonsterDetails } from './AdndMonsterDetails';
import { AdndClasses } from './AdndClasses';
import { AdndClasseDetails } from './AdndClasseDetails';
import { AdndKits } from './AdndKits';
import { AdndKitDetails } from './AdndKitDetails';
import { Adnd } from './Adnd';
import { AdndSpells } from './AdndSpells';

import { AdndOne } from './AdndOne';
import { AdndOneClasses } from './AdndOneClasses';
import { AdndOneClassDetails } from './AdndOneClassDetails';
import { AdndOneSpells } from './AdndOneSpells';

import { Dnd3 } from './Dnd3';
import { Dnd3Classes } from './Dnd3Classes';
import { Dnd3ClassDetails } from './Dnd3ClassDetails';
import { Dnd3Spells } from './Dnd3Spells';

import { Dnd5 } from './Dnd5';

import { Roller } from './Roller';
import { Sheet } from './Sheet';
import { AdndSheet } from './AdndSheet';
import { AdndSheetDetails } from './AdndSheetDetails';

import { Names } from './Names';
import { NameGenerator } from './NameGenerator';



export class App extends React.Component {
    render(){
        return(
            <div className="app">
                <Header />

                <Route exact path="/" component={Home} />

                <Route path="/adndone" component={AdndOne} />
                <Route exact path="/adndonemonsters" component={AdndMonsters} />
                <Route path="/adndonemonster/:id" component={AdndMonsterDetails} />
                <Route path="/adndoneclasses" component={AdndOneClasses} />
                <Route path="/adndoneclass/:id" component={AdndOneClassDetails} />
                <Route path="/adndonespells" component={AdndOneSpells} />
                <Route path="/adndonespells/:id" component={AdndClasseDetails} />


                <Route path="/adnd" component={Adnd} />
                <Route exact path="/adndmonsters" component={AdndMonsters} />
                <Route path="/adndmonster/:id" component={AdndMonsterDetails} />
                <Route path="/adndclasses" component={AdndClasses} />
                <Route path="/adndclass/:id" component={AdndClasseDetails} />
                <Route path="/adndkits" component={AdndKits} />
                <Route path="/adndkit/:id" component={AdndKitDetails} />
                <Route path="/adndspells" component={AdndSpells} />
                <Route path="/adndspells/:id" component={AdndClasseDetails} />


                <Route path="/dnd3" component={Dnd3} />
                <Route exact path="/dnd3monsters" component={AdndMonsters} />
                <Route path="/dnd3monster/:id" component={AdndMonsterDetails} />
                <Route path="/dnd3classes" component={Dnd3Classes} />
                <Route path="/dnd3class/:id" component={Dnd3ClassDetails} />
                <Route path="/dnd3spells" component={Dnd3Spells} />

                <Route path="/dnd5" component={Dnd5} />

                <Route path="/diceroller" component={Roller} />

                <Route path="/sheet" component={Sheet} />
                <Route path="/adndsheet" component={AdndSheet} />
                <Route path="/adndsheetdetails/:id" component={AdndSheetDetails} />

                <Route exact path="/names" component={Names} />
                <Route path="/names/:id" component={NameGenerator} />

            </div>
        )
    }
}