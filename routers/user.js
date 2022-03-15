import { Router } from "express";
import { AddUser, Delete, GetOneUser, ListUser, signIn, Update } from "../controllers/user";
const router = Router();
import { checkAuth } from "../middlewares/checkAuth"

router.get("/api/users", checkAuth, ListUser)
router.get("/api/user/:id", checkAuth, GetOneUser)
router.post("/api/user", checkAuth, AddUser)
router.delete("/api/user/:id", checkAuth, Delete)
router.put("/api/user/:id", checkAuth, Update)
router.post("/login", checkAuth, signIn)
export default router;