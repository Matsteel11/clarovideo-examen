import React, { Component } from "react";
import './nav.css'

class Nav extends Component {

    handleKeyUp = (event) => {
        this.props.onSearch(event,this.props.data);
    }

    render() {
        return (
            <div className="container">
                <div className="navMenu--global">
                    <div className="row">
                        <div className="navLogo">
                            <a>
                                <img src="https://clarovideocdn4-a.akamaihd.net/web/webclient/sk_core/images/clarovideo-logo-sitio.svg" alt="Logo" className="hidden-xs" width="213" height="43" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-xm-12">
                        <div className="form-group">
                            <label>Buscador</label>
                            <input onKeyUp={this.handleKeyUp} className="form-control" placeholder="Buscar"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;