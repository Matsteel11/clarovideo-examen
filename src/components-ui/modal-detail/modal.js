import React, { Component } from "react";
var $;

// Components
import Talent from '../talent/talent';

//Styles
import './modal.css';

class Modal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        debugger;
        if (this.props.data.common != undefined)
            return (
                <div>
                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h1>{this.props.data.common.title}</h1>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img className="img-responsive" src={this.props.data.common.image_large} />
                                        </div>
                                        <div className="col-md-8">
                                            <b><strong>{this.props.data.common.title} ({this.props.data.common.date.split('/')[2]}) {this.props.data.common.duration} {this.props.data.common.rating_code} </strong></b>
                                            <p>{this.props.data.common.description_large}</p>
                                            <h4>Género:
                                                {
                                                    this.props.data.common.extendedcommon.genres.genre.map((item) => ` ${item.desc},`)
                                                }
                                            </h4>
                                            
                                            {
                                                this.props.data.common.extendedcommon.roles.role.map((item) => {
                                                    return(
                                                        <h4>
                                                            {item.desc} : 
                                                            {item.talents.talent.map((talento) => {
                                                                //return ' ' +talento.fullname;
                                                                return <Talent title={talento.fullname} />
                                                            })}
                                                        </h4>
                                                    )
                                                   
                                                })
                                            }
                                            <h4>{this.props.data.common.title}</h4>
                                            <Talent title='Compartir' />
                                        </div>

                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        else {
            return (
                <div>
                    <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h1>Cargando</h1>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }


}

export default Modal;