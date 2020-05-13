/* eslint-disable promise/catch-or-return */
const controller = () => ({
  login: (req, res, { signIn }) => {
    const { email, password } = req.body;
    return signIn(email, password).then((user) => {
        return res.status(user.status).json(user.data);
    }).catch((err) => err);
  },
  create: (req, res, {create}) => {
    console.log("REQ IN BACKEND", req.body);
  }
  
});

export default controller();