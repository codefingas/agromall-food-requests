import React, { Component } from "react";
import Application from "./components/app.js";
import { BrowserRouter, Route } from "react-router-dom";
import AdminLogin from "./components/admin/login";
import List from './components/admin/Resources/categories';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="content">
          <Route exact path="/" component={Application} />
          <Route exact path="/admin" component={AdminLogin} />
          <Route exact path="/admin/:id" component={List} />
        </div>
      </BrowserRouter>
    );
  }
};


export default App;