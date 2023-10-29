import express from 'express'
import { getProducts, insertProducts, getProductById } from '../controllers/productController.js'

const productRouter = express.Router();

productRouter.get('/', getProducts);

productRouter.get('/seed', insertProducts)

productRouter.get('/:id', getProductById)

export default productRouter;