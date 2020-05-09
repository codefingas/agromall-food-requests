import axios from "axios";

const initialState = {
    isAdmin: false
};

const url = `http://localhost:5001/agromall-d819e/us-central1/api`;

const AgroReducer = async (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_LOGIN":
      axios
        .post(`${url}/admin/login`, action.data)
        .then((resp) => {
            console.log("RESPONSE FROM SERVER", resp);
            if (resp.status === 200) {
                return {
                    ...state,
                    ...resp.data,
                    isAdmin: true,

                }
            } else if (resp.status === 401) {
                console.log("THE USER DATA", resp);
                return {
                    ...state,
                    ...resp.data,
                    isAdmin: false,

                }
            } else {
                return state;
            }
        })
        .catch((err) => console.log("ERROR FROM POST", err));

      break;
      default :
        return state;
  }

  return state;
};

export default AgroReducer;
