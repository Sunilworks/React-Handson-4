import React from "react";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";

function RouteCompo() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Student />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default RouteCompo;
