import { combineReducers } from 'redux';
import books from './bookReducer';
import listReducer from './listReducer';
import dataBook from './bookViewReducer';
import favorites from './favoriteReducer';

export default combineReducers({
  dataBook,
  books,
  listReducer,
  favorites,
});
