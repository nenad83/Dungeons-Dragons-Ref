import React from "react";
import axios from "axios";

import monsterData from "./data/adndmonsters.json";

// const ax = axios.create({
//     baseURL: 'https://dungeons-and-dragons-reference.firebaseapp.com/'
//   })
//   const ax = axios.create({
//     baseURL: 'http://localhost:3000'
//   })


export class AdndMonsterDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            monster: {
                name: ""
            },
            query: this.props.match.params.id
        }
        console.log(this.state.query);
        this.fetchMonster =  this.fetchMonster.bind(this);
       
    }

    componentDidMount() {
        console.log(monsterData);
        this.fetchMonster();
    }
    
    

    fetchMonster(){
        axios.get("/adndmonsters.json")
        // axios.get("https://api.myjson.com/bins/mer36")
        // ax.get("adndmonsters.json")
        // axios.get("https://www.jasonbase.com/things/7we2/")
        .then((res) => {

            this.setState({
                monster: {
                    id: res.data[this.state.query].id,
                    name: res.data[this.state.query].name,
                    Terrain : res.data[this.state.query].Terrain,
                    Diet: res.data[this.state.query].Diet,
                    Activity_Cycle: res.data[this.state.query].Activity_Cycle,
                    Intelligence: res.data[this.state.query].Intelligence,
                    Treasure: res.data[this.state.query].Treasure,
                    Alignment: res.data[this.state.query].Alignment,
                    Armor_Class: res.data[this.state.query].Armor_Class,
                    Movement: res.data[this.state.query].Movement,
                    Hit_Dice: res.data[this.state.query].Hit_Dice,
                    THAC0: res.data[this.state.query].THAC0,
                    Attacks: res.data[this.state.query].Attacks,
                    Damage: res.data[this.state.query].Damage,
                    Special_Attacks: res.data[this.state.query].Special_Attacks,
                    Special_Defenses: res.data[this.state.query].Special_Defenses,
                    Magic_Resistance: res.data[this.state.query].Magic_Resistance,
                    Size: res.data[this.state.query].Size,
                    Morale: res.data[this.state.query].Morale,
                    XP_Value: res.data[this.state.query].XP_Value
                }
             
            });
            console.log(res.data)
        })
        .catch((err) => {
            console.log("Error fetching Monsters", err);
        })
    }

    render() {
        return(
            
            <div className="adndmonster-detail">
            
                        <div>
                            <h1>{this.state.monster.name}</h1>
                            <h4>Climate/Terrain: {this.state.monster.Terrain}</h4>
                            <h4>Diet: {this.state.monster.Diet}</h4>
                            <h4>Activity Cycle: {this.state.monster.Activity_Cycle}</h4>
                            <h4>Intelligence: {this.state.monster.Intelligence}</h4>
                            <h4>Treasure: {this.state.monster.Treasure}</h4>
                            <h4>Alignment: {this.state.monster.Alignment}</h4>
                            <h4>Armor Class: {this.state.monster.Armor_Class}</h4>
                            <h4>Movement: {this.state.monster.Movement}</h4>
                            <h4>Hit Dice: {this.state.monster.Hit_Dice}</h4>
                            <h4>THAC0: {this.state.monster.THAC0}</h4>
                            <h4>Attacks: {this.state.monster.Attacks}</h4>
                            <h4>Damage: {this.state.monster.Damage}</h4>
                            <h4>Special Attacks: {this.state.monster.Special_Attacks}</h4>
                            <h4>Special Defenses; {this.state.monster.Special_Defenses}</h4>
                            <h4>Magic Resistance: {this.state.monster.Magic_Resistance}</h4>
                            <h4>Size: {this.state.monster.Size}</h4>
                            <h4>Morale: {this.state.monster.Morale}</h4>
                            <h4>XP Value: {this.state.monster.XP_Value}</h4>
                        </div>
                
            </div>
        )
    }
}