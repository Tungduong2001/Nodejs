import { Router } from "express";
import { AddProduct, Delete, GetOneProduct, List, search, Update, UploadImage } from "../controllers/product";
import { userById } from "../controllers/user";
const router = Router();
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth"

router.get("/products", checkAuth, List)
router.get("/products/:id", GetOneProduct)
router.post("/products", AddProduct)
router.delete("/products/:id", Delete)
router.patch("/products/:id", Update)
router.get("/search", search)
router.post("/upload-image", UploadImage)

router.param("userId", userById)
export default router;