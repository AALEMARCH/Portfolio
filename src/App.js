import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ReactPortfolio/" element={<Home />} />
        <Route path="/ReactPortfolio/contact" element={<Contact />} />
        <Route path="/ReactPortfolio/portfolio" element={<Portfolio />} />
        <Route path="/ReactPortfolio/competences" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
