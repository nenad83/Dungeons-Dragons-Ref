import React from "react";
import { NavLink } from "react-router-dom";


export class NamesList extends React.Component {
    render() {
        return (
            <div className="nameslist">
                {
                    this.props.names.map(names => {
                        return (
                            <div key={this.props.names.id}>
                            <NavLink activeClassName="active" to={"/names/" + names.id}>
                                    <img src={names.image} alt="race portrait"/>
                                    <h3>{names.race}</h3>
                                    <hr />
                                </NavLink>
                                </div>
                        )
                    })
                }
            </div>
        )
    }
}