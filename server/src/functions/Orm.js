import Firefeatures from "./fireConnections";

const { Auth, Firedb } = Firefeatures;

class Orm {
  constructor(name) {
    this.name = name;
  }

  signIn(email, password) {
    return Promise.resolve(
      Auth.getUserByEmail(email)
        .then((resp) => {
          const data = resp.toJSON(),
                [value] = data.providerData;
          if (password !== value.providerId) {
            return { status: 401, data: { msg: "Incorrect Email/Password" } };
          } else {
            delete data.providerData;
            return { status: 200, data };
          }
        })
        .catch((err) => {
          return { status: 401, data: err };
        })
    );
  }

  create(collection, data) {
    let docRef =  Firedb.collection(collection).doc();
    docRef.set(data);

  }
}

export default Orm;
