/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import M from "materialize-css";
import { connect } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends Component {
  state = {
    // alert: {
    //     alertMsg: "Fields cannot be blank",
    //     showAlrt: false,
    // }
  };


  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        this.props.handledModalDismissed({ showForm: false });
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);
  }

  handleSubmit = () => {
    this.props.dispatch({type: "CREATE", data: {entity: this.props.entity, data: this.state}});
  };

  Editing = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
      console.log("PROPS IN CREATE FORM", this.props);
    return (
      <div>
        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          {/* If you want Bottom Sheet Modal then add 
                        bottom-sheet class to the "modal" div
                        If you want Fixed Footer Modal then add
                        modal-fixed-footer to the "modal" div*/}
          <div className="modal-content">
            <div className="container">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    onKeyUp={this.Editing}
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="card-action center-align">
                  <button
                    className="btn btn btn-block waves-effect wave-light"
                    style={{
                      backgroundColor: "#a3b745",
                      width: "100%",
                    }}
                    onClick={this.handleSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#" className="modal-close waves-effect btn-flat">
              Discard
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const MapDispatchToProps = (dispatch) => {
  return dispatch;
};

export default connect(MapDispatchToProps)(Modal);
