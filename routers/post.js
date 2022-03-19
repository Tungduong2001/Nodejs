import { Router } from "express";
import { AddPost, Delete, GetOnePost, ListPost, Update } from "../controllers/post";
const router = Router();
import { checkAuth } from "../middlewares/checkAuth"

router.get("/posts", checkAuth, ListPost)
router.get("/post/:id", checkAuth, GetOnePost)
router.post("/post", checkAuth, AddPost)
router.delete("/post/:id", checkAuth, Delete)
router.put("/post/:id", checkAuth, Update)
export default router;