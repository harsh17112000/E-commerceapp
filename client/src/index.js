import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Contextprovider from "./Components/context/Contextprovider";

ReactDOM.render(
  <Contextprovider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Contextprovider>
  ,
  document.getElementById('root')
);
