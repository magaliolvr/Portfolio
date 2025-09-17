import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.scss"
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Contributions from "./pages/Contributions.jsx";
import Contacts from "./pages/Contacts.jsx";
import ScrollContent from "./pages/ScrollContent.jsx"




createRoot(document.getElementById("root")).render(
  <StrictMode>

    {/* <Route element={<DefaultLayout />}> */}
    <ScrollContent />

  </StrictMode>
);
