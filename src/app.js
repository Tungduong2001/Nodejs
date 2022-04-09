import express from "express";
import cors from "cors"
import morgan from "morgan";
import mongoose from "mongoose";
import cloudinary from "cloudinary"

//import router
import productRoute from "../routers/product"
import postRoute from "../routers/post"
import categoryRoute from "../routers/category";
import authRoute from "../routers/auth"
import userRoute from "../routers/user"


const app = express();

cloudinary.config({
    cloud_name: "asm-js-ecma",
    api_key: "213758365116598",
    api_secret: "W-KjW-n9vwBY2mWUMKs4FSyOeYQ"
});

//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

//route
app.use("/api", productRoute);
app.use("/api", postRoute);
app.use("/api", categoryRoute)
app.use("/api", authRoute)
app.use("/api", userRoute)
//connection database
mongoose.connect('mongodb://localhost:27017/we16309')
    .then(() => console.log("Kết nối DB thành công"))
    .catch((error) => console.log(error));

//connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
}) 