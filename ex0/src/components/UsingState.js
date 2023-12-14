import { useState } from "react";

const UsingState = () => {
    const [counter, setCounter] = useState(0);
  
  
    const increaseCounter = () => {
      setCounter(counter + 1);
    };
  
  
    return (
      <div class="component-using-state">
        <div className="result">{counter}</div>
        <button onClick={increaseCounter} size="lg">
          Click
        </button>
      </div>
    );
  };

export default UsingState;