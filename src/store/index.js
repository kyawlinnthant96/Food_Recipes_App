import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import catReducer from './reducer/category';
import ingReducer from './reducer/ingredients';
import recReducer from './reducer/recipes';

const rootReducer = combineReducers({
  catList: catReducer,
  recList: recReducer,
  ingList: ingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
