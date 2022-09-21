import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </>
  );
};

export default App;
