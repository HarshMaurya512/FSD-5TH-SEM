import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="app">
      <div className="header">
        <h1>Counter App</h1>
      </div>

      <div className="counter">
        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;