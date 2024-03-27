import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
/*import { Team } from "./components/Team"; */
import { Contact } from "./components/contact";
import Project from "./components/project"
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./pages/NotFoundPage";

// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });

const App = () => {
  // const [landingPageData, setLandingPageData] = useState({});
  // useEffect(() => {
  //   setLandingPageData(JsonData);
  // }, []);

  return (
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
  );
};

export default App;
