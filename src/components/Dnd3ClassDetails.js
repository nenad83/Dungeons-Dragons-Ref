import React from "react";
import axios from "axios";


export class Dnd3ClassDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            class: {
                name: "",
                Level1: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level2: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level3: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level4: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level5: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level6: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level7: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level8: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level9: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level10: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level11: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level12: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level13: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level14: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level15: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level16: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level17: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level18: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level19: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
                Level20: [{hd: "", xp: "", baseattack: "", saves: "", class: "", spells: ""}],
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
        axios.get("/dnd3classes.json")
        // axios.get("https://api.myjson.com/bins/o8c76")
        // axios.get("./adndclasses.json")
        .then((res) => {
            // for(let i=0; i<res.data.length; i++){
            this.setState({
                class: {
                    id: res.data[this.state.query].id,
                    Name: res.data[this.state.query].Name,
                    Hit_Dice : res.data[this.state.query].Hit_Dice,
                    Alignment: res.data[this.state.query].Alignment,
                    Primary_Ability: res.data[this.state.query].Primary_Ability,
                    Description: res.data[this.state.query].Description,
                    Class_Points: res.data[this.state.query].Class_Points,
                    Class_Skills: res.data[this.state.query].Class_Skills,
                    Weapon_and_Armor_Proficiency: res.data[this.state.query].Weapon_and_Armor_Proficiency,
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
                            <h4>Primary Ability: {this.state.class.Primary_Ability}</h4>
                            <h4>Alignment: {this.state.class.Alignment}</h4>
                            <h4>Weapon Restriction: {this.state.class.Weapon_and_Armor_Proficiency}</h4>
                            <h4>Skill Points per Level: {this.state.class.Class_Points}</h4>
                            <h4>Class Skills: {this.state.class.Class_Skills}</h4>
                        </div>
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>Level</th>
                                    <th>Hit Dice</th>
                                    <th>Experiance</th>
                                    <th>Base Attack</th>
                                    <th>F/R/W/</th>
                                    <th>Class Features</th>
                                    <th>Spells</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{this.state.class.Level1[0].hd}</td>
                                    <td>{this.state.class.Level1[0].xp}</td>
                                    <td>{this.state.class.Level1[0].baseattack}</td>
                                    <td>{this.state.class.Level1[0].saves}</td>
                                    <td>{this.state.class.Level1[0].class}</td>
                                    <td>{this.state.class.Level1[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>{this.state.class.Level2[0].hd}</td>
                                    <td>{this.state.class.Level2[0].xp}</td>
                                    <td>{this.state.class.Level2[0].baseattack}</td>
                                    <td>{this.state.class.Level2[0].saves}</td>
                                    <td>{this.state.class.Level2[0].class}</td>
                                    <td>{this.state.class.Level2[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>{this.state.class.Level3[0].hd}</td>
                                    <td>{this.state.class.Level3[0].xp}</td>
                                    <td>{this.state.class.Level3[0].baseattack}</td>
                                    <td>{this.state.class.Level3[0].saves}</td>
                                    <td>{this.state.class.Level3[0].class}</td>
                                    <td>{this.state.class.Level3[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>{this.state.class.Level4[0].hd}</td>
                                    <td>{this.state.class.Level4[0].xp}</td>
                                    <td>{this.state.class.Level4[0].baseattack}</td>
                                    <td>{this.state.class.Level4[0].saves}</td>
                                    <td>{this.state.class.Level4[0].class}</td>
                                    <td>{this.state.class.Level4[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>{this.state.class.Level5[0].hd}</td>
                                    <td>{this.state.class.Level5[0].xp}</td>
                                    <td>{this.state.class.Level5[0].baseattack}</td>
                                    <td>{this.state.class.Level5[0].saves}</td>
                                    <td>{this.state.class.Level5[0].class}</td>
                                    <td>{this.state.class.Level5[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>{this.state.class.Level6[0].hd}</td>
                                    <td>{this.state.class.Level6[0].xp}</td>
                                    <td>{this.state.class.Level6[0].baseattack}</td>
                                    <td>{this.state.class.Level6[0].saves}</td>
                                    <td>{this.state.class.Level6[0].class}</td>
                                    <td>{this.state.class.Level6[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>{this.state.class.Level7[0].hd}</td>
                                    <td>{this.state.class.Level7[0].xp}</td>
                                    <td>{this.state.class.Level7[0].baseattack}</td>
                                    <td>{this.state.class.Level7[0].saves}</td>
                                    <td>{this.state.class.Level7[0].class}</td>
                                    <td>{this.state.class.Level7[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>{this.state.class.Level8[0].hd}</td>
                                    <td>{this.state.class.Level8[0].xp}</td>
                                    <td>{this.state.class.Level8[0].baseattack}</td>
                                    <td>{this.state.class.Level8[0].saves}</td>
                                    <td>{this.state.class.Level8[0].class}</td>
                                    <td>{this.state.class.Level8[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>{this.state.class.Level9[0].hd}</td>
                                    <td>{this.state.class.Level9[0].xp}</td>
                                    <td>{this.state.class.Level9[0].baseattack}</td>
                                    <td>{this.state.class.Level9[0].saves}</td>
                                    <td>{this.state.class.Level9[0].class}</td>
                                    <td>{this.state.class.Level9[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>{this.state.class.Level10[0].hd}</td>
                                    <td>{this.state.class.Level10[0].xp}</td>
                                    <td>{this.state.class.Level10[0].baseattack}</td>
                                    <td>{this.state.class.Level10[0].saves}</td>
                                    <td>{this.state.class.Level10[0].class}</td>
                                    <td>{this.state.class.Level10[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>{this.state.class.Level11[0].hd}</td>
                                    <td>{this.state.class.Level11[0].xp}</td>
                                    <td>{this.state.class.Level11[0].baseattack}</td>
                                    <td>{this.state.class.Level11[0].saves}</td>
                                    <td>{this.state.class.Level11[0].class}</td>
                                    <td>{this.state.class.Level11[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>{this.state.class.Level12[0].hd}</td>
                                    <td>{this.state.class.Level12[0].xp}</td>
                                    <td>{this.state.class.Level12[0].baseattack}</td>
                                    <td>{this.state.class.Level12[0].saves}</td>
                                    <td>{this.state.class.Level12[0].class}</td>
                                    <td>{this.state.class.Level12[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>{this.state.class.Level13[0].hd}</td>
                                    <td>{this.state.class.Level13[0].xp}</td>
                                    <td>{this.state.class.Level13[0].baseattack}</td>
                                    <td>{this.state.class.Level13[0].saves}</td>
                                    <td>{this.state.class.Level13[0].class}</td>
                                    <td>{this.state.class.Level13[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>{this.state.class.Level14[0].hd}</td>
                                    <td>{this.state.class.Level14[0].xp}</td>
                                    <td>{this.state.class.Level14[0].baseattack}</td>
                                    <td>{this.state.class.Level14[0].saves}</td>
                                    <td>{this.state.class.Level14[0].class}</td>
                                    <td>{this.state.class.Level14[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>{this.state.class.Level15[0].hd}</td>
                                    <td>{this.state.class.Level15[0].xp}</td>
                                    <td>{this.state.class.Level15[0].baseattack}</td>
                                    <td>{this.state.class.Level15[0].saves}</td>
                                    <td>{this.state.class.Level15[0].class}</td>
                                    <td>{this.state.class.Level15[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>16</td>
                                    <td>{this.state.class.Level16[0].hd}</td>
                                    <td>{this.state.class.Level16[0].xp}</td>
                                    <td>{this.state.class.Level16[0].baseattack}</td>
                                    <td>{this.state.class.Level16[0].saves}</td>
                                    <td>{this.state.class.Level16[0].class}</td>
                                    <td>{this.state.class.Level16[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>17</td>
                                    <td>{this.state.class.Level17[0].hd}</td>
                                    <td>{this.state.class.Level17[0].xp}</td>
                                    <td>{this.state.class.Level17[0].baseattack}</td>
                                    <td>{this.state.class.Level17[0].saves}</td>
                                    <td>{this.state.class.Level17[0].class}</td>
                                    <td>{this.state.class.Level17[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>18</td>
                                    <td>{this.state.class.Level18[0].hd}</td>
                                    <td>{this.state.class.Level18[0].xp}</td>
                                    <td>{this.state.class.Level18[0].baseattack}</td>
                                    <td>{this.state.class.Level18[0].saves}</td>
                                    <td>{this.state.class.Level18[0].class}</td>
                                    <td>{this.state.class.Level18[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>19</td>
                                    <td>{this.state.class.Level19[0].hd}</td>
                                    <td>{this.state.class.Level19[0].xp}</td>
                                    <td>{this.state.class.Level19[0].baseattack}</td>
                                    <td>{this.state.class.Level19[0].saves}</td>
                                    <td>{this.state.class.Level19[0].class}</td>
                                    <td>{this.state.class.Level19[0].spells}</td>
                                </tr>
                                <tr>
                                    <td>20</td>
                                    <td>{this.state.class.Level20[0].hd}</td>
                                    <td>{this.state.class.Level20[0].xp}</td>
                                    <td>{this.state.class.Level20[0].baseattack}</td>
                                    <td>{this.state.class.Level20[0].saves}</td>
                                    <td>{this.state.class.Level20[0].class}</td>
                                    <td>{this.state.class.Level20[0].spells}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4>{this.state.class.Description}</h4>
                
            </div>
        )
    }
}