import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import user from "./reducers/userReducer";
import flow from "./reducers/flowReducer";
import asyncDispatch from "./middleware/AsyncDispatchMiddleware";
import {reduxLog} from "../Constants";

let middleware;
if (reduxLog) {
  middleware = applyMiddleware(logger, thunk, asyncDispatch);
} else {
  middleware = applyMiddleware(thunk, asyncDispatch);
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
    user,
    flow,
  }),
  composeEnhancers(middleware)
);

export default store;
