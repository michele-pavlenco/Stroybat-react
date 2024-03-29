import React, { useState, useEffect } from "react";
import Project from "./components/project"
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {

  return (
      <div >
          <BrowserRouter>


              <Routes>
                  <Route
                      index
                      element={<Home/>}
                  />
                  <Route
                      path="project/:projectId"
                      // path="project"
                      element={<Project/>}
                  />
                  <Route path='*' element={<NotFoundPage />} />
              </Routes>
          </BrowserRouter>
      </div>

  );
};

export default App;
