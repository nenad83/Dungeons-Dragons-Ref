import React from "react";
import { NavLink } from "react-router-dom";

export class AdndMosterList extends React.Component {
    render() {
        return (
            <div className="adndmonsterlist">
                {
                    this.props.monsters.map(monster => {
                        return (
                            <div key={this.props.monsters.id}>
                            <NavLink to={"/adndmonster/" + monster.id}>
                                    <h3>{monster.name}</h3>
                                    
                                </NavLink>
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}