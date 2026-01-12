import express from "express";
import cors from "cors";
import userRoutes from "../routes/user.routes.js";
import attendanceRoutes from "../routes/attendance.routes.js";
import breakRoutes from "../routes/break.routes.js";  
import departmentsRoutes from "../routes/departments.routes.js";  
import notificationsRoutes from "../routes/notifications.routes.js";
import tasksRoutes from "../routes/tasks.routes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use("/api/users", userRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/breaks", breakRoutes);
app.use("/api/departments", departmentsRoutes);
app.use("/api/notifications", notificationsRoutes);
app.use("/api/tasks", tasksRoutes);

export default app;
