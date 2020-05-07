import { Router } from "express";
import controller from "./controller";

const adminRoute = (req, res) => {
    // console.log(arguments)

  const router = Router();
  router.get("/", (req, res) => {
    controller.get(req, res);
  });

  return router;
};

export default adminRoute;
