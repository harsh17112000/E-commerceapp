import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import rootreducers from "./Components/redux/reducers/main";


const middleware = [thunk];

const store = createStore(
    rootreducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;