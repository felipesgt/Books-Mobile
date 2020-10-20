import { createStore } from 'redux';
import combineReducers from '../reducer/combineReducer';

const store = createStore(combineReducers);

export default store;
