import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext.js";
import "./style.css";


const MyComponent = () => {
  const context = useContext(ThemeContext);
  return (
    <div className="my-component">
      <div className="title">title</div>
      <button onClick={context.toggleTheme}>Click</button>
    </div>
  );
};


export default MyComponent;