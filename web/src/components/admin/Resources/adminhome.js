import React from "react";

const organize = (props) => {
  const { entities } = props;

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
        {props.entities.map((entity) => (
          <div key={entity.name} className="col s12 m3">
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <div className="card-title">{entity.name}</div>
                  <p>
                  
                  </p>
                </div>
                <div className="card-action right-align">
                  <a href={`/admin/${entity.name.toLowerCase()}`}>View</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default organize;
