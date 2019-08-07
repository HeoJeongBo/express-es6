import express from "express";
import { signup } from "./auth.ctrl";

const router = express.Router();

router.post("/signup", signup);
// router.post("/login", userCtrl.login);

export default router;
