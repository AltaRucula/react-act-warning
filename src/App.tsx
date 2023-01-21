import React, { useState } from "react";

const App: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Click me
      </button>
      {show && <div>Hi</div>}
    </div>
  );
};

export default App;
