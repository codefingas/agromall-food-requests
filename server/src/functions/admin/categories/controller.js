/* eslint-disable promise/catch-or-return */
const controller = () => ({
    create: async (req, res, {create}) => {
        console.log("THE REQUEST HERE", req.body);
          return create(req.body);
            // console.log("SUCCESSFULLY CREATED ITEM", item);
    }
    
  });
  
  export default controller();