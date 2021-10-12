import React from "react";
import { MyContext } from "./Comp1";

class Comp4 extends React.Component {
  render() {
    return (
      <>
        <MyContext.Consumer>
          {(theme) => <h4>this is com4 {theme}</h4>}
        </MyContext.Consumer>
      </>
    );
  }
}

export default Comp4;
