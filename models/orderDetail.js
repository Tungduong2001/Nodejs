import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";
const orderDetailSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    idOrder: {
        type: ObjectId,
        ref: "Orders"
    },
    quantity: {
        type: Number,
        required: true
    }
}, { timestamps: true })
export default mongoose.model("OrderDetails", orderDetailSchema)