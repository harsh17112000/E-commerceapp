import express from 'express';
import { myOrders, getCartProducts, getOrder, payments } from '../controllers/orderController.js';
import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.get('/mine', isAuth, myOrders)

orderRouter.post('/', isAuth , getCartProducts);

orderRouter.get('/:id', isAuth, getOrder);

orderRouter.put('/:id/pay', isAuth, payments);

export default orderRouter;
