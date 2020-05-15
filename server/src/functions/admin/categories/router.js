import { Router } from "express";
import controller from "./controller";

const categories = ({req, res, Orm}) => {
    const Methods = new Orm('categories');
    const router = Router();

  router.post("/", (req, res) => {
    controller.create(req, res, Methods);
  }); 

  return router;
};

export default categories;
