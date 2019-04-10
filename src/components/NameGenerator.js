import React from "react";
import axios from "axios";

export class NameGenerator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            names: {
                mname: "",
                fname: "",
                lname: ""
            },
            query: this.props.match.params.id,
            name: "Generate Name"
        }
        console.log(this.state.names.mname)
        this.fetchNames =  this.fetchNames.bind(this);
        this.randomMaleName = this.randomMaleName.bind(this);
        this.randomFemaleName = this.randomFemaleName.bind(this);
    }

    componentDidMount() {
        this.fetchNames();
    }
    fetchNames() {
        axios.get("/names.json")
        .then((res) => {
            this.setState({
                names: {
                    id: res.data[this.state.query].id,
                    race: res.data[this.state.query].race,
                    mname: res.data[this.state.query].mname,
                    fname: res.data[this.state.query].fname,
                    lname: res.data[this.state.query].lname,
                }
            })
            console.log(res.data[this.state.query].mname[1])
        })
        .catch((err) => {
            console.log("Error fetchin names", err)
        })
    }

    randomMaleName(){
        let male = this.state.names.mname;
        let random = Math.floor(Math.random() * male.length);
        return male[random];
    }

    randomFemaleName(){
        let female = this.state.names.fname;
        let random = Math.floor(Math.random() * female.length);
        return female[random];
    }

    onClickButtonMale = () => {
        this.setState({
          name: this.randomMaleName()
        });
      }

    onClickButtonFemale = () => {
        this.setState({
          name: this.randomFemaleName()
        });
      }

    render(){
        return(
            <div className="namegen">
            <h1>{this.state.names.race}</h1>
            <h3>{this.state.name}</h3>
            <button onClick={this.onClickButtonMale}>Male</button>
            <button onClick={this.onClickButtonFemale}>Female</button>
            </div>  
        )
    }
}