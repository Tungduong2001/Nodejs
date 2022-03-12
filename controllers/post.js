import mongoose from "mongoose"
const Post = mongoose.model('Post', { title: String, image: String, content: String })


export const AddPost = async (req, res) => {
    try {
        const post = await new Post(req.body).save()
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được bài viết"
        })
    }
}

export const ListPost = async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}

export const GetOnePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}