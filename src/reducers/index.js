import App from '../App'
import consoleReducer from './logProduct'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    products: App,
    logProduct: consoleReducer

});

export default allReducers;