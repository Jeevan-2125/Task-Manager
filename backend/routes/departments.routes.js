import express from "express";
const router = express.Router();
import {getDepartments} from "../controolers/departments.controller.js";

router.get("/", getDepartments);

export default router;
