import "./styles.css";
import React from "react";
import Comp1 from "./Comp1";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Comp1 />
      </div>
    );
  }
}

export default App;
