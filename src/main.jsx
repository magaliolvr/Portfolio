import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Contributions from "./pages/Contributions.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/contributions" element={<Contributions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
