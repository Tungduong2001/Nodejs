import { Router } from "express";
import { UploadImage } from "../controllers/product";
import { addSlide, GetOneSLide, listSlide, removeSlide, updateSlide } from "../controllers/slide";

const router = Router()

router.get('/slide', listSlide);
router.delete('/slide/:id', removeSlide);
router.put('/slide/:id', updateSlide);
router.post('/slide', addSlide);
router.get('/slide/:id', GetOneSLide)
router.post("/upload-image", UploadImage)

export default router