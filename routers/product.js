import { Router } from "express";
import { AddProduct, Delete, GetOneProduct, List, search, Update, UploadImage } from "../controllers/product";
import { userById } from "../controllers/user";
const router = Router();
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth"

router.get("/products", checkAuth, List)
router.get("/product/:id", checkAuth, GetOneProduct)
router.post("/product/:userId", requireSignin, isAuth, isAdmin, AddProduct)
router.delete("/product/:id/:userId", requireSignin, isAuth, isAdmin, Delete)
router.put("/product/:id/:userId", requireSignin, isAuth, isAdmin, Update)
router.post("/search", search)
router.post("/upload-image", UploadImage)

router.param("userId", userById)
export default router;