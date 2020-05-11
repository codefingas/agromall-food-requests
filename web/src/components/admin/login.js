import React, { useState, useCallback, useEffect } from "react";
import firebase from "firebase";
import { connect } from "react-redux";
import LandingPage from "./Resources/adminhome";

const SignIn = (props) => {
  const { dispatch } = props;
  const [data, setData] = useState({});
  const [loading, isLoading] = useState(false);
  const [alert, setAlert] = useState({
    alertMsg: "Incorrect Email/Password",
    showAlrt: false,
  });

  const inputValue = useCallback(({ target }) => {
    setData((prevData) => ({
      ...prevData,
      [target.type]: target.value,
    }));
  }, []);

  const adminLogin = async () => {
    isLoading(true);
    // props.dispatch({ type: "ADMIN_LOGIN", data: data });
    const { email, password } = data;
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        setAlert((prevAlrt) => ({
          ...prevAlrt,
          showAlrt: true,
        }));

        isLoading(false);
      });
  };

  return (
    <div className={props.loggedIn ? "hide valign-wrapper" : "valign-wrapper"}>
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
                      alert.showAlrt
                        ? "center-align red-text"
                        : "hide center-align"
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

const Login = (props) => {
  const [loggedIn, isLoggedIn] = useState(false);
  const [entities, setEntity] = React.useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        isLoggedIn(true);
      } else {
        isLoggedIn(false);
      }
    });
  }, []);

  useEffect(() => {
    Promise.resolve(props.state).then((resp) => setEntity(resp.entities));
  }, []);

  return (
    <React.Fragment>
      {loggedIn ? (
        <LandingPage entities={entities} {...props} />
      ) : (
        <SignIn loggedIn={loggedIn} {...props} />
      )}
    </React.Fragment>
  );
};

const MapStateToProps = (state) => {
  return {
    state,
  };
};

const MapDispathToProps = (dispatch) => {
  return { dispatch };
};

export default connect(MapStateToProps, MapDispathToProps)(Login);
