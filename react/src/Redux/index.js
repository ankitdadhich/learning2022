import {combineReducers} from 'redux';
import homeReducer from './Home/reducer';

const RootReducer = combineReducers ({
    home: homeReducer,
}) ;

export default RootReducer