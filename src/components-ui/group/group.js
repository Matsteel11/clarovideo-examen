import React, { Component } from "react";
import './group.css'

class Group extends Component {


    handleClick = (event) => {
        this.props.onCLick(this.props);
    }

    render() {
        return (
            <div className="post" onClick={this.handleClick} >
                <div className="jcarousel-item-1 jcarousel-item popover-active row">
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <div className="item-wraper">
                                <a>
                                    <img className="img" src={this.props.image_small} alt="" />
                                    <p>{this.props.title}</p>
                                    <span className="play">
                                        <i className="far fa-play-circle"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Group;