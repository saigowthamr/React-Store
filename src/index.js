import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

const Hold = () =>
  render(
     <App/>,
    document.getElementById("root")
  );
export default Hold;
