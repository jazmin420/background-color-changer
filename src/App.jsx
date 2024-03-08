import React, { useState } from 'react';
import './App.css'

function App() {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };

  return (
    <div style={{ backgroundColor: colors[colorIndex] }}>
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
}

export default App;

