# Usage

```js
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          width="300px"
          src="http://static.myletter.net/20170124/ed2bf141-5342-4804-ac34-6a30fb525b01.jpg"
        />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```