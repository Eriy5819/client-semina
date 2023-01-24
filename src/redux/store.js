import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';

import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import categoriesReducer from './categories/reducer';
import notifReducer from './notif/reducer';
import talentReducer from './talents/reducer';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  notif: notifReducer,
  talents: talentReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
