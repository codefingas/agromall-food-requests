import { Router } from "express";
import controller from "./controller";

const adminRoute = ({req, res, Orm}) => {
    const Methods = new Orm('admin');
  const router = Router();
  router.post("/", (req, res) => {
    controller.login(req, res, Methods);
  });

  return router;
};

export default adminRoute;
