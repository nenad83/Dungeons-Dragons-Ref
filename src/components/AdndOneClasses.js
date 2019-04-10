import React from "react";
import axios from "axios";

import { AdndOneClassesList } from "./AdndOneClassesList.js";

export class AdndOneClasses extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            classes: [
            ]
        }
        console.log(this.state);
        this.fetchClasses = this.fetchClasses.bind(this);
    }

    componentDidMount(){
        this.fetchClasses();
        
    }

    fetchClasses(){
        axios.get("/adndoneclasses.json")
        .then((res) => {
            console.log(res.data)
            this.setState({
                classes: res.data
            });
        })
        .catch((err) => {
            console.log("Error fetching Classes", err);
        })
    }
    render(){
        return(
            <div className="adndclasses">
                <AdndOneClassesList classes= {this.state.classes}/>
            </div>
        )
    }
}