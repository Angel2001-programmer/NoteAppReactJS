import React, { useState } from "react";
import "./App.css";

function App() {
  const [warning, setWarning] = useState(false);

  const buttonHandler = () => {
    setWarning(true);
  };

  const warningHandler = () => {
    setWarning(false);
  };

  let warningbox = <div></div>;

  if (warning != false) {
    warningbox = (
      <div>
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={warningHandler}>Proceed</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {warningbox}
          <button onClick={buttonHandler}>Delete</button>
        </div>
      </header>
    </div>
  );
}

export default App;
