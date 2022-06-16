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
        // required: true
    },
    price: {
        type: Number,
        // required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    desc: {
        type: String,
        // required: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

productSchema.index({ "$**": 'text' });
export default mongoose.model('Product', productSchema)