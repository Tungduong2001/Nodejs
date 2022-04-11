import Slide from '../models/slide'

export const listSlide = async (req, res) => {
    try {
        const slide = await Slide.find().exec()
        res.json(slide)
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const addSlide = async (req, res) => {
    try {
        const slide = await new Slide(req.body).save()
        res.json(slide)
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const removeSlide = async (req, res) => {
    try {
        const slide = await Slide.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(slide)
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const updateSlide = async (req, res) => {
    try {
        const slide = await Slide.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        res.json(slide)
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const GetOneSLide = async (req, res) => {
    try {
        const getOne = await Slide.findOne({ _id: req.params.id }).exec()
        res.json(getOne)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}