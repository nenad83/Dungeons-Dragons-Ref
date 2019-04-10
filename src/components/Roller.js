import React from 'react';


import dice20 from "../assets/images/d20.png"
import dice12 from "../assets/images/d12.png"
import dice10 from "../assets/images/d10.png"
import dice100 from "../assets/images/d100.png"
import dice8 from "../assets/images/d8.png"
import dice6 from "../assets/images/d6.png"
import dice4 from "../assets/images/d4.png"

export class Roller extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            result:  0,
            number: ""
        }
        this.rolltwenty = this.rolltwenty.bind(this);
        this.rolltwelve = this.rolltwelve.bind(this);
        this.rollten = this.rollten.bind(this);
        this.rollhunderd = this.rollhunderd.bind(this);
        this.rolleight = this.rolleight.bind(this);
        this.rollsix = this.rollsix.bind(this);
        this.rollfour = this.rollfour.bind(this);
    }

    rolltwenty() {
        let roll = Math.floor(Math.random() * 20) +1;
        this.setState({
            result: roll
        })
    }

    rolltwelve() {
        let roll = Math.floor(Math.random() * 12) +1;
        this.setState({
            result: roll
        })
    }

    rollten() {
        let roll = Math.floor(Math.random() * 10) +1;
        this.setState({
            result: roll
        })
    }

    rollhunderd() {
        let roll = Math.floor(Math.random() * 100) +1;
        this.setState({
            result: roll
        })
    }

    rolleight() {
        let roll = Math.floor(Math.random() * 8) +1;
        this.setState({
            result: roll
        })
    }

    rollsix() {
        let roll = Math.floor(Math.random() * 6) +1;
        this.setState({
            result: roll
        })
    }

    rollfour() {
        let roll = Math.floor(Math.random() * 4) +1;
        this.setState({
            result: roll
        })
    }



    render() {
        return(
            <div className="dice">
               <button onClick={this.rolltwenty}><img src={dice20} alt="dice6" /></button>
               <button onClick={this.rolltwelve}><img src={dice12} alt="dice12" /></button>
               <button onClick={this.rollten}><img src={dice10} alt="dice10" /></button>
               <button onClick={this.rollhunderd}><img src={dice100} alt="dice100" /></button>
               <button onClick={this.rolleight}><img src={dice8} alt="dice8" /></button>
               <button onClick={this.rollsix}><img src={dice6} alt="dice6" /></button>
               <button onClick={this.rollfour}><img src={dice4} alt="dice4" /></button>
               <h1>Roll: {this.state.result}</h1>
            </div>
        )
    }
}