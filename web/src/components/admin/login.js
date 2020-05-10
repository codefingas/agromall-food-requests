import React, { useState, useCallback, useEffect } from "react";
import firebase from "firebase";
import { connect } from "react-redux";

const Login = (props) => {
  const { dispatch } = props;
  const [data, setData] = useState({});
  const [loading, isLoading] = useState(false);
  const [alert, setAlert] = useState({
    alertMsg: "Incorrect Email/Password",
    showAlrt: false,
  });
  const { isAdmin } = props.state;

  const adminLogin = async () => {
    isLoading(true);
    dispatch({ type: "ADMIN_LOGIN", data: data });

     
  };

  const inputValue = useCallback(({ target }) => {
    setData((prevData) => ({
      ...prevData,
      [target.type]: target.value,
    }));
  }, []);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        props.history.push("/admin"); //redirecting
        // ...
      } else {
        setAlert((prevAlrt) => ({
          ...prevAlrt,
          showAlert: true,
        }));
      }
    });
  }, []);

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
                    <input
                      id="email"
                      type="email"
                      name="email"
                      onKeyUp={inputValue}
                      disabled={loading}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="password"
                      type="password"
                      onKeyUp={inputValue}
                      disabled={loading}
                    />
                    <label htmlFor="password">Password</label>
                  </div>

                  <p
                    className={
                      alert.showAlrt ? "center-align" : "hide center-align"
                    }
                  >
                    {alert.alertMsg}
                  </p>
                </div>
              </div>
              <div className="card-action center-align">
                <button
                  className={`btn btn-block waves-effect wave-light ${
                    loading ? "disabled" : ""
                  }`}
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

const MapStateToProps = (state) => {
  return { state };
};

const MapDispathToProps = (dispatch) => {
  return { dispatch };
};

export default connect(MapStateToProps, MapDispathToProps)(Login);
