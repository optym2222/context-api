import React from "react";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
const MyContext = React.createContext("avinash");

class Comp1 extends React.Component {
  render() {
    return (
      <>
        <h4>this is com1 </h4>
        <Comp3 />
        <MyContext.Provider value={"Rinku"}>
          <Comp4 />
        </MyContext.Provider>
      </>
    );
  }
}

export default Comp1;
export { MyContext };
