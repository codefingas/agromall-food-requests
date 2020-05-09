/* eslint-disable promise/catch-or-return */
const controller = () => ({
  login: (req, res, { signIn }) => {
    const { email, password } = req.body;
    return signIn(email).then((user) => {
        return res.status(user.status).json(user.data);
    }).catch((err) => err);
  }
});

export default controller();