# Usage

```js
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = onClick => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const hello = () => console.log("hello");
  const title = useClick(hello);
  return (
    <div className="App">
      <div ref={title}>Hi</div>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```