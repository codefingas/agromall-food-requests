import React, { Component } from "react";
import Application from "./components/app.js";
import { BrowserRouter, Route } from "react-router-dom";
import AdminLogin from "./components/admin/login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Route exact path="/" component={Application} />
          <Route path="/agro-admin" component={AdminLogin} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
