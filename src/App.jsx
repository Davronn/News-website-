import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Detelis from "./pages/Detelis";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detelis:postId" element={<Detelis/>} />
      </Routes>
    </Router>
  );
}

export default App;
