import express from "express";
import { create, list, remove } from "./schedule.ctrl";

const router = express.Router();

router.post("/create", create);
router.get("/:userId", list);
router.delete("/:id", remove);

export default router;
