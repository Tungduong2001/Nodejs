import Post from '../models/post'


export const AddPost = async (req, res) => {
    try {
        const addPost = await new Post(req.body).save()
        res.json(addPost)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được bài viết"
        })
    }
}

export const ListPost = async (req, res) => {
    try {
        const listPost = await Post.find()
        res.json(listPost)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}

export const GetOnePost = async (req, res) => {
    try {
        const getOne = await Post.findById(req.params.id)
        res.json(getOne)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}

export const Delete = async (req, res) => {
    try {
        const remove = await Post.findByIdAndRemove(req.params.id)
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
        const update = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(update)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}