const express = require('express');
const app = express();

//middleware
const check = (req, res, next) => {
    const status = true;
    if (status) {
        console.log("Chào anh");
        next();
    } else {
        console.log("Bạn không có quyền");
    }
}
app.get("/api/products", check, (req, res) => {
    const products = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" }
    ];
    res.json(products)
})
// const server = http.createServer((req, res) => {
//     console.log('url', req.url);
//     if (req.url === "/") {
//         res.setHeader('Content-Type', "text/html");
//         res.write("<html><body><h1>Home Page</h1></body></html>")
//         res.end()
//     } else if (req.url === "/api/products") {
//         const products = [
//             { id: 1, name: "Product A" },
//             { id: 2, name: "Product B" }
//         ];
//         res.end(JSON.stringify(products));
//     } else {
//         console.log('CHịu Không biết');
//     }
// });

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
}) 