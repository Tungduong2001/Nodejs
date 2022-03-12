import { Router } from "express";
import { AddProduct, Delete, GetOneProduct, List, Update } from "../controllers/product";
const router = Router();
import { checkAuth } from "../middlewares/checkAuth"

router.get("/api/products", checkAuth, List)
router.get("/api/products/:id", checkAuth, GetOneProduct)
router.post("/api/products", checkAuth, AddProduct)
router.delete("/api/products/:id", checkAuth, Delete)
router.put("/api/products/:id", checkAuth, Update)
export default router;