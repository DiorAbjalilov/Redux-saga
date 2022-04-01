import React from "react";
import { render } from "react-dom";
import App from "./App";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/rootReducer";
import forbiddenWordsMiddleware from "./redux/middleware";
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, forbiddenWordsMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
