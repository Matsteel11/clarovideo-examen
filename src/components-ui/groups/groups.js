// Dependencias
import React, { Component } from "react";

// Components
import Group from '../group/group';

import Modal from '../modal-detail/modal';

// Models
import { Group as GroupModel } from "../../models/homeModel";


class Groups extends Component {
    
    constructor(props){
        super(props)
        this.selectedGroup  =new GroupModel;
        this.state = {
            groupSelected: this.props.data.groups[0]
        }
    }

    handleClick = (data)=> {
       this.props.onClick(data);
    }

    render(){
        return (
            <div className="container">
                <Modal data={this.props.selectedGroup} />
                <div className="infinite">
                    <div className="row">
                        {
                            this.props.data.groups.map((group) => {
                                return <Group onCLick={this.handleClick} key={group.id} {...group} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Groups;