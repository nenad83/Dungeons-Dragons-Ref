import React from "react";
import { NavLink } from "react-router-dom";

export class Dnd3ClassesList extends React.Component {
    render() {
        return (
            <div className="adndclasslist">
                {
                    this.props.classes.map(classes => {
                        return (
                            <div key={this.props.classes.id}>
                            <NavLink to={"/dnd3class/" + classes.id}>
                                    <h3>{classes.Name}</h3>
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