import mongoose, { Schema, ObjectId } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        required: true,
        unique: true,
        index: true
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
        type: mongoose.Schema.ObjectId,
        ref: "Category"
    },
    desc: {
        type: String,
        required: true
    }
}, { timestamps: true });

productSchema.index({ "$**": 'text' });
export default mongoose.model('Product', productSchema)