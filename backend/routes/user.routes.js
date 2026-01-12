import express from "express";
const router = express.Router();
import {getUsers} from "../controolers/user.controller.js";

router.get("/", getUsers);

export default router;
