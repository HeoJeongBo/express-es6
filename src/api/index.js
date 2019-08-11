import express from "express";
import auth from "./auth";
import schedule from "./schedule";

const router = express.Router();

router.use("/auth", auth);
router.use("/schedule", schedule);

export default router;
