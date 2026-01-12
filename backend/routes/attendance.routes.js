import express from "express" ;
const router = express.Router();
import {getAttendence} from "../controolers/attendance.controller.js";

router.get("/", getAttendence);

export default router;
