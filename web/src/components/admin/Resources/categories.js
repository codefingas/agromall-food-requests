import React from "react";
import { connect } from "react-redux";
import CreateForm from "./Form/createForm";

const List = (props) => {
  const entity = props.match.params.id;
  const [formDismissed, isFormDismissed] = React.useState({ showForm: true });
  const [entities, setEntities] = React.useState([{data: []}]);

  React.useEffect(() => {
    Promise.resolve(props.state).then((resp) => setEntities(resp.entities.filter(v => v.name === entity)));
  }, []);


//   console.log("PROPS IN LIST", entities);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col m3">
            <h3>{entity}</h3>
          </div>
          <div className="col offset-m7 offset-s2">
            <button
              className="btn btn-lg btn modal-trigger"
              style={{
                backgroundColor: "#a3b745",
                marginRight: "20px"
              }}
              onClick={() => isFormDismissed({ showForm: false })}
              component={<CreateForm />}
              data-target="modal1"
            >
              Create
            </button>

            <button
              className="btn btn-lg"
              style={{
                backgroundColor: "#a3b745",
              }}
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
          {<CreateForm entity={entity} handledModalDismissed={isFormDismissed} />}
          {entities[0].data.length !== 0 ? entities[0].data.map((entity) => (
          <div key={entity.name} className="col s12 m12">
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
        )) : (<div className="col s12 m12">
            <div className="card horizontal">
              <div className="card-stacked">
                <div className="card-content">
                  <div className="card-title">
                      No Entity here
                  </div>
                  <p>
                  
                  </p>
                </div>
                <div className="card-action right-align">
                    {/* <a href=""></a> */}
                </div>
              </div>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};



const MapStateToProps = (state) => {
    return {
      state
    };
  };
  
  const MapDispathToProps = (dispatch) => {
    return { dispatch };
  };
  
  export default connect(MapStateToProps, MapDispathToProps)(List);
  