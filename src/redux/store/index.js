import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from 'redux-thunk'; // Fix import statement for thunk
import rootReducer from '../reducers'; // Fix import statement for rootReducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
