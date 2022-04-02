import { Router } from "express";
import { AddCategory, DetailCate, ListCategory, RemoveCate } from "../controllers/category";

const router = Router()
import { checkAuth } from "../middlewares/checkAuth";

router.post('/category', checkAuth, AddCategory);
router.get('/category/:id', checkAuth, DetailCate);
router.delete('/category/:id', checkAuth, RemoveCate);
router.get('/category', checkAuth, ListCategory);

export default router
