import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import dogPageReducer from "./reducers/dogReducer"


const store = legacy_createStore(dogPageReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Store - Sparar vårt state
// Reducer - Uppdaterar vårt state
// Action - Säger vad vi ska uppdatera
// Dispatch - Triggar en action

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>
);
