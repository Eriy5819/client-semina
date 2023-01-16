import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';

import thunk from 'redux-thunk';
import authReducer from './auth/reducer';

const composerEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
