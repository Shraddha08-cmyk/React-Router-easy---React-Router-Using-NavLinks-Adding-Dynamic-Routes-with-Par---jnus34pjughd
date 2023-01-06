import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NoteFound from "./Pages/NotFound";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<NoteFound />}></Route>
      </Routes>
  );
};
export default AppRoutes;
