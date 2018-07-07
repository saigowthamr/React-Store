import React, { Component } from "react";
import CounterButtons from "./counterbuttons";
import Text from "./text";
import Todo from "./todo";
import FetchData from "./fetch";
import { getState} from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <hr />
        <h1>Counter</h1>
        <hr />
        <h3>Component 1</h3>
        <h1>{getState().num}</h1>
        <CounterButtons />
        <hr />
        <Text />
        <h1>Todo</h1>
        <hr />
        <Todo />
        <hr />
        <h1>Fetch Data</h1>
        <FetchData />
      </div>
    );
  }
}

export default App;
