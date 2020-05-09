import Firefeatures from "./fireConnections";

const { Auth } = Firefeatures;

class Orm {
  constructor(name) {
    this.name = name;
  }

  signIn(email) {
     return Promise.resolve(Auth.getUserByEmail(email)
      .then((resp) => {
        return { status: 200, data: resp.toJSON() };
      })
      .catch((err) => {
        return { status: 401, data: err };
      }));
  }
}

export default Orm;
