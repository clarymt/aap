import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Products from './products'; // This is json file

import App from './App';

function products(state = Products) { // Products is array data
    return state
}

const store = createStore(
    products,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); // This is reducers
    store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import {createStore} from 'redux';
// import productList from './reducers';

// import { Provider } from 'react-redux';

// const store = createStore(
//     productList,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );
//   store.subscribe(() => console.log(store.getState()));
  

//   ReactDOM.render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root'));
// Create Store, Wrap the Provider Component to the App

// STORE -> globalized state

// // ACTION add 1 to cart 
// const logProduct = () = > {
//     return {
//         type: 'LOGPRODUCT'
//     }
// }

// // REDUCER check which action and modify store 
// const counter = (state = 0, aciton) => {
//     switch(aciton.type){
//         case "LOGPRODUCT":
//             return 
//     }
// }

// DISPATCH action to reducer
