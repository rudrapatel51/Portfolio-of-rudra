import React, { useState, useRef } from "react";

const Practice = () => {
  const [count, setCount] = useState(4);
  const themeRef = useRef();

  function decrementCount() {
    setCount(count - 1);
  }
  function incrementCount() {
    setCount(count + 1);
  }
  function handleInput(event) {
    alert("A name was submitted: " + themeRef.current.value);
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleInput}>
        <input type="text" ref={themeRef} />
        <br />

        <button type="submit">submit</button>
        <br />
      </form>
      <button onClick={decrementCount}>decrease</button>
      <span>{count}</span>
      <button onClick={incrementCount}>increase</button>
    </div>
  );
};

export default Practice;
