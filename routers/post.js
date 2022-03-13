import { Router } from "express";
import { AddPost, Delete, GetOnePost, ListPost, Update } from "../controllers/post";
const router = Router();
import { checkAuth } from "../middlewares/checkAuth"

router.get("/api/posts", checkAuth, ListPost)
router.get("/api/posts/:id", checkAuth, GetOnePost)
router.post("/api/posts", checkAuth, AddPost)
router.delete("/api/posts/:id", checkAuth, Delete)
router.put("/api/posts/:id", checkAuth, Update)
export default router;