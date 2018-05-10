import React, { Component } from "react";
import Group from '../group/group';

function Groups(props) {
    return (
        <div className="container">
            <div className="infinite">
                <div className="row">
                    {
                        props.data.map((group) => {
                            return <Group key={group.id} {...group} />
                        })
                    }
                </div>
            </div>
        </div>
    )

}

export default Groups;