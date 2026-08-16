import express from 'express'
import "dotenv/config";
import findAllProducts from "../src/products/product.repository"
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

app.get("/api/all-products",async (req, res) => {
    console.log("api call")
    const products  = await findAllProducts();
    console.log(products);
    res.json(products);
    if (!products){
        console.log("No products found for this server");
    }
})
