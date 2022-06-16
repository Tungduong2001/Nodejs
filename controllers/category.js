import Category from '../models/category'
import Product from '../models/product'

export const AddCategory = async (req, res) => {
    try {
        const category = await new Category(req.body).save();
        res.json(category)
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const ListCategory = async (req, res) => {
    try {
        const category = await Category.find().exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const DetailCate = async (req, res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id }).exec()
        const product = await Product.find({ category }).select("-category").exec()
        res.json({
            category,
            product
        })
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const RemoveCate = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({ _id: req.params.id }).exec()
        res.json({
            message: "Xóa thành công",
            category
        })
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const Update = async (req, res) => {
    try {
        const update = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        res.json(update)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}