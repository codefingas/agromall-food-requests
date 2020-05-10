import Firefeatures from "./fireConnections";

const { Auth } = Firefeatures;

class Orm {
  constructor(name) {
    this.name = name;
  }

  signIn(email, password) {
    return Promise.resolve(
      Auth.getUserByEmail(email)
        .then((resp) => {
          const data = resp.toJSON();
          delete data.providerData[0]
          if (password !== data.providerData[0].providerId) {
            return { status: 401, data: { msg: "Incorrect Email/Password" } };
          } else {
            return { status: 200, data };
          }
        })
        .catch((err) => {
          return { status: 401, data: err };
        })
    );
  }
}

export default Orm;
