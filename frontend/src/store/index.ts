import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import eventsReducer from "./events";
const rootReducer = combineReducers({
  session: sessionReducer,
  events: eventsReducer
});

let enhancer: any;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
  // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState?: object) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
