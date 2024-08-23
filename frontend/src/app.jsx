import React from "react";

import Home from "./Home/Home";
import Courses from "./courses/Courses";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}
