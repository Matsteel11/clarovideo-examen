import React, { Component } from "react";
import Group from '../group/group';

function Groups(props) {
    debugger;
    return (
        <div className="container">
            <div className="infinite">
                <div className="row">
                    {
                        props.data.groups.map((group) => {
                            return <Group key={group.id} {...group} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Groups;