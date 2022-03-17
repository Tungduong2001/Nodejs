import mongoose, { Schema, ObjectId } from "mongoose";

const productChema = new Schema({
    name: {
        type: String,
        minlength: 5,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    desc: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Product', productChema)