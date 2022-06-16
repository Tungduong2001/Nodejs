import { Router } from "express";
import { AddCategory, DetailCate, ListCategory, RemoveCate, Update } from "../controllers/category";

const router = Router()
import { checkAuth } from "../middlewares/checkAuth";

router.post('/category', AddCategory);
router.get('/category/:id', DetailCate);
router.delete('/category/:id', RemoveCate);
router.get('/category', ListCategory);
router.patch('/category/:id', Update);

export default router
