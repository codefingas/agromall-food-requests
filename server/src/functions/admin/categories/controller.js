/* eslint-disable promise/catch-or-return */
const controller = () => ({
    create: (req, res, {create}) => {
        console.log("THE REQUEST HERE", req.body);
    }
    
  });
  
  export default controller();