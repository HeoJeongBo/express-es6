import express from "express";
import { movie } from "./movie.ctrl";
const router = express.Router();

router.post("/", movie);

export default router;
