import { Router } from "express";

import { createUserRoute } from "./users/createUserRoute";
import { deleteUserRoute } from "./users/deleteUserRoute";
import { getAllUsersRoute } from "./users/getAllUsersRoute";
import { getUserByIdRoute } from "./users/getUserByIdRoute";
import { updateUserRoute } from "./users/updateUserRoute";
import { versionRoute } from "./versionRoute";

const router = Router();

router.post("/users/", createUserRoute);
router.get("/users/:id", getUserByIdRoute);
router.put("/users/:id", updateUserRoute);
router.delete("/users/:id", deleteUserRoute);
router.get("/users/", getAllUsersRoute);
router.get("/", versionRoute);

export default router;
