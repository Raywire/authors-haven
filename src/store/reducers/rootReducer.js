import authReducer from './authReducer';
import articleReducer from './articleReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  articles: articleReducer,
});

export default rootReducer;
