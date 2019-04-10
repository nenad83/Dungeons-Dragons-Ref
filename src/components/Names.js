import React from "react";
import axios from "axios";

import {NamesList} from "./NamesList.js"

export class Names extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            names: [

            ]
        }
        this.fetchNames = this.fetchNames.bind(this);
    }

    componentDidMount(){
        this.fetchNames();
        
    }

    fetchNames() {
        axios.get("/names.json")
        .then((res) => {
            this.setState({
                names: res.data
            })
        })
        .catch((err) => {
            console.log("Error fetchin names", err)
        })
    }
    render(){
        return(
            <div className="names">
                <NamesList names= {this.state.names}/>
            </div>
        )
    }
}