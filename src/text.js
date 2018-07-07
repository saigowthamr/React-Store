import React from "react";
import { getState } from "./store";

function Text(props) {
  return (
    <div>
      <h3>Component 2</h3>
      <h1 style={{color:'green'}} >{getState().num}</h1>
    </div>
  );
}

export default Text;
