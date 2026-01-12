import express from "express";
const router = express.Router();
import {getTasks} from "../controolers/tasks.controller.js";

router.get("/", getTasks);

export default router;
