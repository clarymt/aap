import Product from './productList'
import counterReducer from './logProduct'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    products: Product,
    logProduct: counterReducer

});

export default allReducers;