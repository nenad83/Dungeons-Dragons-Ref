import React from "react";
import axios from "axios";


import { Dnd3ClassesList } from "./Dnd3ClassesList.js";

export class Dnd3Classes extends React.Component{

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
        axios.get("/dnd3classes.json")
        // axios.get("https://api.myjson.com/bins/135ixm")
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
                <Dnd3ClassesList classes= {this.state.classes}/>
            </div>
        )
    }
}