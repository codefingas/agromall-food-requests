import React, { useState, useCallback } from "react";
import { connect } from "react-redux";

const Login = (props) => {
  console.log("PROPS IN LOGIN PAGE", props);
  const { dispatch } = props;
  const [data, setData] = useState({});
  const [loading, isLoading] = useState(false);

  const adminLogin = () => {
    isLoading(true);
    dispatch({type: 'ADMIN_LOGIN', data: data});

    // props.history.push("/"); //redirecting
  };

  const inputValue = useCallback(({ target }) => {
    setData((prevData) => ({
      ...prevData,
      [target.type]: target.value,
    }));
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
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="password" type="password" onKeyUp={inputValue} />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
              </div>
              <div className="card-action center-align">
                <button
                  className={`btn btn-block waves-effect wave-light ${loading ? 'disabled' : ''}`}
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
