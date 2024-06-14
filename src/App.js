import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NotFoundPage from "./pages/NotFoundPage";
import JsonData from "./data/data.json";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="project/:projectId" element={<Project />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Contact data={landingPageData.Contact} />
    </BrowserRouter>
  );
};

export default App;
