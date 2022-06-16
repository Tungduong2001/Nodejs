import Formidable from 'formidable'
import Product from '../models/product'
import { cloudinaryUpload } from '../utils/cloudinary'

export const List = async (req, res) => {
    try {
        const listProduct = await Product.find().exec()
        res.json(listProduct)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}
export const GetOneProduct = async (req, res) => {
    try {
        const getOne = await Product.findById(req.params.id).exec()
        res.json(getOne)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}
export const AddProduct = async (req, res) => {
    try {
        const addProduct = await new Product(req.body).save()
        res.json(addProduct)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }
}
export const UploadImage = async (req, res) => {
    const form = new Formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
        const result = await cloudinaryUpload(files.image.filepath)
        res.json(result)
    })
}
export const Delete = async (req, res) => {
    try {
        const remove = await Product.findByIdAndRemove(req.params.id).exec()
        res.json({
            message: "Xóa thành công",
            data: remove
        })
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}
export const Update = async (req, res) => {
    try {
        const update = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        res.json(update)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}

export const search = async (req, res) => {
    try {
        // console.log(req.query);
        const searchString = req.query.q ? req.query.q : "";
        const result = await Product.find({ name: new RegExp(searchString, "i") }).exec();
        res.json(result)
    } catch (error) {
        res.status(400).json({
            message: "không tìm thấy sản phẩm"
        })
    }
}