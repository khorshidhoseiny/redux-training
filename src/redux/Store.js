import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(logger,thunk,sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
