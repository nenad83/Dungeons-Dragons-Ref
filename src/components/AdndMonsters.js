import React from "react";
import axios from "axios";


import { AdndMosterList } from "./AdndMonsterList.js";

export class AdndMonsters extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            monsters: []
        }
        this.fetchMonsters = this.fetchMonsters.bind(this);
    }

    componentDidMount(){
        this.fetchMonsters();
        
    }

    fetchMonsters(){
        axios.get("/adndmonsters.json")
        
        .then((res) => {
            console.log(res.data)
            this.setState({
                monsters: res.data
            });
        })
        .catch((err) => {
            console.log("Error fetching Monsters", err);
        })
    }
    render(){
        return(
            <div className="adndmonsters">
                <AdndMosterList monsters= {this.state.monsters}/>
                {/* <AdndMonsterDetails monsters= {this.state.monsters} /> */}
            </div>
        )
    }
}