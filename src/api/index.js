import express from "express";
import auth from "./auth";
import schedule from "./schedule";
import movie from "./movie";

const router = express.Router();

router.use("/auth", auth);
router.use("/schedule", schedule);
router.use("/movie", movie);

export default router;
