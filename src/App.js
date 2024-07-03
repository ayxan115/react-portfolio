import React from "react";
import "./styles/main.css";

import Nav from "./components/Nav";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
