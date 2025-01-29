import { Router } from "express";
import { versionRoute } from "./versionRoute";

const router = Router();

router.get("/version", versionRoute);

export default router;
