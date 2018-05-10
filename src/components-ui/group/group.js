import React from "react";
import './group.css'

function Group(props) {
    return (
        <div className="post">
            <div className="jcarousel-item-1 jcarousel-item popover-active row">
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <div className="item-wraper">
                            <a>
                                <img className="img" src={props.image_small} alt="" />
                                <p>{props.title}</p>
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

export default Group;