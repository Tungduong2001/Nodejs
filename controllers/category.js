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