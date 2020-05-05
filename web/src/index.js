import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";


// fix for the footer
// https://medium.com/@stefanmaretic/react-sticky-footer-f842d5fbd68

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
