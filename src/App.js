import React from "react";
import MainComponent from "./components/MainComponent";
import logo from "./logo.svg";
import "./App.css";
import dishStore from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={dishStore}>
      <div className="App font-link">
        <MainComponent />
      </div>
    </Provider>
  );
}

export default App;
