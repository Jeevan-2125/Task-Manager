import express from "express";
const router = express.Router();
import {getBreaks} from "../controolers/break.controller.js";

router.get("/", getBreaks);

export default router;
