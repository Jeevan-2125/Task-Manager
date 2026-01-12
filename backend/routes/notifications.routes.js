import express from "express";
const router = express.Router();
import {getNotifications} from "../controolers/notifications.controller.js";

router.get("/", getNotifications);

export default router;
