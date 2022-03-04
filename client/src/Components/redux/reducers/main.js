import { getProductsReducers } from "./Productreducers";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductsReducers
});

export default rootreducers;