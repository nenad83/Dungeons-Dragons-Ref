import React from "react";
import axios from "axios";


export class AdndOneClassDetails extends React.Component {

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
        axios.get("/adndoneclasses.json")
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
                    Text: res.data[this.state.query].Text,
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
            
            <div className="adndclass-detail">
            
                        <div>
                            <h1>{this.state.class.Name}</h1>
                            <h4>Hit Dice: {this.state.class.Hit_Dice}</h4>
                            <h4>Class Group: {this.state.class.Class_Group}</h4>
                            <h4>Primary Ability: {this.state.class.Primary_Ability}</h4>
                            <h4>Race Restriction: {this.state.class.Race_Restriction}</h4>
                            <h4>Weapon Restriction: {this.state.class.Weapon_Restriction}</h4>
                            <h4>Armor Restriction: {this.state.class.Armor_Restriction}</h4>
                            <h4>Shield Restriction: {this.state.class.Shield_Restriction}</h4>
                            <h4>Spells: {this.state.class.Spells}</h4>
                            <h4>Attacks per level: {this.state.class.Attacks_per_level}</h4>
                        </div>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Level</th>
                                    <th>Hit Dice</th>
                                    <th>Experiance</th>
                                    <th>THACO</th>
                                    <th>PPD/PP/RSW/BW/S</th>
                                    <th>Class Features</th>
                                    <th>Spells</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{this.state.class.Level1[0].hd}</td>
                                    <td>{this.state.class.Level1[0].xp}</td>
                                    <td>{this.state.class.Level1[0].thaco}</td>
                                    <td>{this.state.class.Level1[0].saves}</td>
                                    <td>{this.state.class.Level1[0].class}</td>
                                    <td>{this.state.class.Level1[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>{this.state.class.Level2[0].hd}</td>
                                    <td>{this.state.class.Level2[0].xp}</td>
                                    <td>{this.state.class.Level2[0].thaco}</td>
                                    <td>{this.state.class.Level2[0].saves}</td>
                                    <td>{this.state.class.Level2[0].class}</td>
                                    <td>{this.state.class.Level2[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>{this.state.class.Level3[0].hd}</td>
                                    <td>{this.state.class.Level3[0].xp}</td>
                                    <td>{this.state.class.Level3[0].thaco}</td>
                                    <td>{this.state.class.Level3[0].saves}</td>
                                    <td>{this.state.class.Level3[0].class}</td>
                                    <td>{this.state.class.Level3[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>{this.state.class.Level4[0].hd}</td>
                                    <td>{this.state.class.Level4[0].xp}</td>
                                    <td>{this.state.class.Level4[0].thaco}</td>
                                    <td>{this.state.class.Level4[0].saves}</td>
                                    <td>{this.state.class.Level4[0].class}</td>
                                    <td>{this.state.class.Level4[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>{this.state.class.Level5[0].hd}</td>
                                    <td>{this.state.class.Level5[0].xp}</td>
                                    <td>{this.state.class.Level5[0].thaco}</td>
                                    <td>{this.state.class.Level5[0].saves}</td>
                                    <td>{this.state.class.Level5[0].class}</td>
                                    <td>{this.state.class.Level5[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>{this.state.class.Level6[0].hd}</td>
                                    <td>{this.state.class.Level6[0].xp}</td>
                                    <td>{this.state.class.Level6[0].thaco}</td>
                                    <td>{this.state.class.Level6[0].saves}</td>
                                    <td>{this.state.class.Level6[0].class}</td>
                                    <td>{this.state.class.Level6[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>{this.state.class.Level7[0].hd}</td>
                                    <td>{this.state.class.Level7[0].xp}</td>
                                    <td>{this.state.class.Level7[0].thaco}</td>
                                    <td>{this.state.class.Level7[0].saves}</td>
                                    <td>{this.state.class.Level7[0].class}</td>
                                    <td>{this.state.class.Level7[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>{this.state.class.Level8[0].hd}</td>
                                    <td>{this.state.class.Level8[0].xp}</td>
                                    <td>{this.state.class.Level8[0].thaco}</td>
                                    <td>{this.state.class.Level8[0].saves}</td>
                                    <td>{this.state.class.Level8[0].class}</td>
                                    <td>{this.state.class.Level8[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>{this.state.class.Level9[0].hd}</td>
                                    <td>{this.state.class.Level9[0].xp}</td>
                                    <td>{this.state.class.Level9[0].thaco}</td>
                                    <td>{this.state.class.Level9[0].saves}</td>
                                    <td>{this.state.class.Level9[0].class}</td>
                                    <td>{this.state.class.Level9[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>{this.state.class.Level10[0].hd}</td>
                                    <td>{this.state.class.Level10[0].xp}</td>
                                    <td>{this.state.class.Level10[0].thaco}</td>
                                    <td>{this.state.class.Level10[0].saves}</td>
                                    <td>{this.state.class.Level10[0].class}</td>
                                    <td>{this.state.class.Level10[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>{this.state.class.Level11[0].hd}</td>
                                    <td>{this.state.class.Level11[0].xp}</td>
                                    <td>{this.state.class.Level11[0].thaco}</td>
                                    <td>{this.state.class.Level11[0].saves}</td>
                                    <td>{this.state.class.Level11[0].class}</td>
                                    <td>{this.state.class.Level11[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>{this.state.class.Level12[0].hd}</td>
                                    <td>{this.state.class.Level12[0].xp}</td>
                                    <td>{this.state.class.Level12[0].thaco}</td>
                                    <td>{this.state.class.Level12[0].saves}</td>
                                    <td>{this.state.class.Level12[0].class}</td>
                                    <td>{this.state.class.Level12[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>{this.state.class.Level13[0].hd}</td>
                                    <td>{this.state.class.Level13[0].xp}</td>
                                    <td>{this.state.class.Level13[0].thaco}</td>
                                    <td>{this.state.class.Level13[0].saves}</td>
                                    <td>{this.state.class.Level13[0].class}</td>
                                    <td>{this.state.class.Level13[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>{this.state.class.Level14[0].hd}</td>
                                    <td>{this.state.class.Level14[0].xp}</td>
                                    <td>{this.state.class.Level14[0].thaco}</td>
                                    <td>{this.state.class.Level14[0].saves}</td>
                                    <td>{this.state.class.Level14[0].class}</td>
                                    <td>{this.state.class.Level14[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>{this.state.class.Level15[0].hd}</td>
                                    <td>{this.state.class.Level15[0].xp}</td>
                                    <td>{this.state.class.Level15[0].thaco}</td>
                                    <td>{this.state.class.Level15[0].saves}</td>
                                    <td>{this.state.class.Level15[0].class}</td>
                                    <td>{this.state.class.Level15[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>{this.state.class.Level16[0].hd}</td>
                                    <td>{this.state.class.Level16[0].xp}</td>
                                    <td>{this.state.class.Level16[0].thaco}</td>
                                    <td>{this.state.class.Level16[0].saves}</td>
                                    <td>{this.state.class.Level16[0].class}</td>
                                    <td>{this.state.class.Level16[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>{this.state.class.Level17[0].hd}</td>
                                    <td>{this.state.class.Level17[0].xp}</td>
                                    <td>{this.state.class.Level17[0].thaco}</td>
                                    <td>{this.state.class.Level17[0].saves}</td>
                                    <td>{this.state.class.Level17[0].class}</td>
                                    <td>{this.state.class.Level17[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>{this.state.class.Level18[0].hd}</td>
                                    <td>{this.state.class.Level18[0].xp}</td>
                                    <td>{this.state.class.Level18[0].thaco}</td>
                                    <td>{this.state.class.Level18[0].saves}</td>
                                    <td>{this.state.class.Level18[0].class}</td>
                                    <td>{this.state.class.Level18[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>{this.state.class.Level19[0].hd}</td>
                                    <td>{this.state.class.Level19[0].xp}</td>
                                    <td>{this.state.class.Level19[0].thaco}</td>
                                    <td>{this.state.class.Level19[0].saves}</td>
                                    <td>{this.state.class.Level19[0].class}</td>
                                    <td>{this.state.class.Level19[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>{this.state.class.Level20[0].hd}</td>
                                    <td>{this.state.class.Level20[0].xp}</td>
                                    <td>{this.state.class.Level20[0].thaco}</td>
                                    <td>{this.state.class.Level20[0].saves}</td>
                                    <td>{this.state.class.Level20[0].class}</td>
                                    <td>{this.state.class.Level20[0].spells}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <h4>{this.state.class.Text}</h4>
                
            </div>
        )
    }
}