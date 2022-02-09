import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import RootReducer from '../Redux/index';

export const store = createStore( RootReducer, applyMiddleware(ReduxThunk))

