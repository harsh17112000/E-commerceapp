import Product from "../models/productsModel.js";
import {products} from '../products.js'
import expressAsyncHandler from "express-async-handler";

export const getProducts = expressAsyncHandler(async (req,res) => {
    const products = await Product.find({});
    res.send(products);
})

export const insertProducts = expressAsyncHandler(async(req,res) => {
    await Product.deleteMany({});
    const createdProducts = await Product.insertMany(products);
    res.send( {createdProducts} );
})

export const getProductById = expressAsyncHandler(async(req,res) => {
    const product = await Product.findById(req.params.id);

    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message: "Product not found."});
    }
})