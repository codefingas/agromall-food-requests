import React from "react";

const organize = (props) => {
  const {entities} = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col m3">
          <h3>Entities</h3>
        </div>
        <div className="col offset-m7 offset-s2">
          <button
            className="btn btn-lg"
            style={{ marginTop: "40px" }}
            onClick={() => {
              props.dispatch({ type: "SIGN_OUT" });
            }}
          >
            log out
          </button>
        </div>
      </div>

      <hr />
      <div className="row">

      </div>
    </div>
  );
};

export default organize;
