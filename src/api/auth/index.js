import express from "express";
import { signup, login } from "./auth.ctrl";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
// router.post("/login", userCtrl.login);

export default router;
