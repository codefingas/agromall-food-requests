/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from "react";
import "./style.css";
import Cart from "./cart/cart";


class App extends Component {
  state = {
    showForm: false,
    display: false,
    width: 250,
  };

  render() {

    return (
      <React.Fragment>
        <div id="main" className="container-fluid">
          <nav>
            <div
              className="nav-wrapper"
              style={{
                backgroundColor: "#a3b745",
              }}
            >
              <a href="#" className="brand-logo">
                Agro Food Orders
              </a>
              <ul id="nav-mobile" className="right">
                <Cart />
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
};


export default App;
