import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import catReducer from './reducer/category';
import ingReducer from './reducer/ingredients';
import recReducer from './reducer/recipes';
import bookReducer from './reducer/bookmark';

const rootReducer = combineReducers({
  catList: catReducer,
  recList: recReducer,
  ingList: ingReducer,
  bookList: bookReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
