import React from "react";
import { Provider } from "react-redux"
import "./App.css";
import Main from "./components/Main/Component";

import Store from "./todo/Store";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
