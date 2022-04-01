import React from "react";
import { render } from "react-dom";
import App from "./App";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddilware from "redux-saga";
import { rootReducer } from "./redux/rootReducer";
import forbiddenWordsMiddleware from "./redux/middleware";
import { sagaWatcher } from "./redux/sagas";

const saga = createSagaMiddilware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(sagaWatcher);

render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
