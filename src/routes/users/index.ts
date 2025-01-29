import { Router } from "express";

import { createUserRoute } from "./createUserRoute";
import { deleteUserRoute } from "./deleteUserRoute";
import { getUserRoute } from "./getUserRoute";
import { updateUser } from "./updateUserRoute";

const router = Router();

router.post("/", createUserRoute);
router.get("/:id", getUserRoute);
router.put("/:id", updateUser);
router.delete("/:id", deleteUserRoute);

export default router;
