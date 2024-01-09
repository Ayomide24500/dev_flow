import { Router } from "express";
import {
  createUser,
  viewAlluser,
  viewOneuser,
} from "../controller/userController";

const router: Router = Router();
router.route("/create-user").post(createUser);
router.route("/view-user").get(viewAlluser);
router.route("/view-user/:userID").get(viewOneuser);

export default router;
