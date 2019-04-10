import React from "react";
import axios from "axios";


export class AdndSheetDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            class: {
                name: "",
                Level1: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level2: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level3: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level4: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level5: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level6: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level7: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level8: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level9: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level10: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level11: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level12: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level13: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level14: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level15: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level16: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level17: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level18: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level19: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
                Level20: [{hd: "", xp: "", thaco: "", saves: "", class: "", spells: ""}],
            },
            query: this.props.match.params.id
        }
        console.log(this.state.class.Level2[0].thaco);
        console.log(this.state.class.Name);
        this.fetchClass =  this.fetchClass.bind(this);
       
    }

    componentDidMount() {
        this.fetchClass();
    }

    fetchClass(){
        // axios.get("https://api.myjson.com/bins/ak5u2")
        // axios.get("https://api.myjson.com/bins/wgali")
        axios.get("/adndclasses.json")
        // axios.get("https://api.myjson.com/bins/o8c76")
        // axios.get("./adndclasses.json")
        .then((res) => {
            // for(let i=0; i<res.data.length; i++){
            this.setState({
                class: {
                    id: res.data[this.state.query].id,
                    Name: res.data[this.state.query].Name,
                    Hit_Dice : res.data[this.state.query].Hit_Dice,
                    Starting_THACO: res.data[this.state.query].Starting_THACO,
                    Class_Group: res.data[this.state.query].Class_Group,
                    Primary_Ability: res.data[this.state.query].Primary_Ability,
                    Multi_class: res.data[this.state.query].Multi_class,
                    Dual_class: res.data[this.state.query].Dual_class,
                    Race_Restriction: res.data[this.state.query].Race_Restriction,
                    Weapon_Restriction: res.data[this.state.query].Weapon_Restriction,
                    Armor_Restriction: res.data[this.state.query].Armor_Restriction,
                    Shield_Restriction: res.data[this.state.query].Shield_Restriction,
                    Max_Proficiency_Allowed: res.data[this.state.query].Max_Proficiency_Allowed,
                    Spells: res.data[this.state.query].Spells,
                    Class_Abilities: res.data[this.state.query].Class_Abilities,
                    Attacks_per_level: res.data[this.state.query].Attacks_per_level,
                    Lore: res.data[this.state.query].Lore,
                    Level1: res.data[this.state.query].Level1,
                    Level2: res.data[this.state.query].Level2,
                    Level3: res.data[this.state.query].Level3,
                    Level4: res.data[this.state.query].Level4,
                    Level5: res.data[this.state.query].Level5,
                    Level6: res.data[this.state.query].Level6,
                    Level7: res.data[this.state.query].Level7,
                    Level8: res.data[this.state.query].Level8,
                    Level9: res.data[this.state.query].Level9,
                    Level10: res.data[this.state.query].Level10,
                    Level11: res.data[this.state.query].Level11,
                    Level12: res.data[this.state.query].Level12,
                    Level13: res.data[this.state.query].Level13,
                    Level14: res.data[this.state.query].Level14,
                    Level15: res.data[this.state.query].Level15,
                    Level16: res.data[this.state.query].Level16,
                    Level17: res.data[this.state.query].Level17,
                    Level18: res.data[this.state.query].Level18,
                    Level19: res.data[this.state.query].Level19,
                    Level20: res.data[this.state.query].Level20
                }
             
            });
        // }
            console.log(res.data[this.state.query].Level1[0].xp)
        })
        .catch((err) => {
            console.log("Error fetching Class", err);
        })
    }


    render() {
        return(
            
            <div className="adndsheet-detail">
            
                        <div>
                        <h3>Character Information</h3>
                            Name: <input type="text" style={{marginLeft: "30px"}}/> <br />
                            Race: <select id="race" name="race" style={{marginLeft: "38px"}}>
                                        <option value="select-country">Select Race</option>
                                        <option value="elf">Elf</option>
                                        <option value="dwarf">Dwarf</option>
                                        <option value="human">Human</option>
                                        <option value="gnome">Gnome</option>
                                        <option value="halfling">Halfling</option>
                                        <option value="halfelf">Half-Elf</option>
                                        <option value="halforc">Half-Orc</option>
                                  </select><br />
                            Age: <input type="number" style={{marginLeft: "44px", width: "40px"}}/> <br />        
                            Class: {this.state.class.Name}   <br />   
                            Level: <select id="race" name="race" style={{marginLeft: "34px"}}>
                                        <option value="select">Select Level</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                  </select><br />

                            Hit Points: <input type="number" style={{width: "40px"}} /> <br />
                            <br />
                            <h3>Abilities</h3>
                            STR: <input type="number" style={{width: "30px", marginLeft: "30px"}} /> <br />
                            DEX: <input type="number" style={{width: "30px", marginLeft: "25px"}}/> <br />
                            CON: <input type="number" style={{width: "30px", marginLeft: "24px"}}/> <br />
                            INT: <input type="number" style={{width: "30px", marginLeft: "34px"}}/> <br />
                            WIS: <input type="number" style={{width: "30px", marginLeft: "30px"}}/> <br />
                            CHA: <input type="number" style={{width: "30px", marginLeft: "24px"}}/> <br />
                        </div>
                
            </div>
        )
    }
}