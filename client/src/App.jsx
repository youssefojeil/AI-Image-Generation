import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Home, CreatePost } from "./pages";
import { logo } from "./assets";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default App;
