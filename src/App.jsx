import React from "react";
import "./App.css";
import NewsItems from "./components/News/NewsItems";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentNews from "./components/News/ComponentNews";
import Practice from "./practice/practice";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComponentNews />}></Route>
          <Route path="/practice" element={<Practice />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
