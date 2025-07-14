import { Router } from "express";
import { updateHeading, getHeading } from "../controllers/controllers.js";

const router = Router();

router.post("/update-heading", updateHeading);
router.get("/heading", getHeading);

export default router;
