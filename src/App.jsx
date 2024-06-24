import React, { useState } from "react";
import "./App.css";
import NewsItems from "./components/News/NewsItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Practice from "./practice/practice";
import Todo from "./practice/todolist/Todo";
import Name from "./Portfolio/Name";
import { counterContext } from "./practice/ContextHook";
import MainComponent from "./components/News/MainComponent";

function App() {
  const [count,setCount] = useState(0);
  return (
    <>
    <counterContext.Provider value={count}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />}></Route>
          <Route path="/practice" element={<Practice />}></Route>
          <Route path="/todolist" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
</counterContext.Provider>
    </>
  );
}

export default App;
