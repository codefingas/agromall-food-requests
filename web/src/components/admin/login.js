import React from "react";



const Login = (props) => {
    console.log("PROPS IN LOGIN PAGE", props);

    const adminLogin = () => {
        props.history.push("/"); //redirecting
    };

  return (
    <div className="valign-wrapper">
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card darken-1">
              <div className="card-content">
                <h4 className="card-title center-align">Admin Login</h4>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password"/>
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
              </div>
              <div className="card-action center-align">
                <button
                  className="btn btn-block waves-effect wave-light"
                  style={{
                    backgroundColor: "#a3b745",
                    width: "100%",
                  }}
                  onClick={adminLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
