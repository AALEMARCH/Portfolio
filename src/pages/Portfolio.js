import React from "react";
import Navigation from "../components/Navigation";
import PortfolioHandle from "../components/PortfolioHandle";
import ScrollToTop from "react-scroll-to-top";

const Portfolio = () => {
  return (
    <div className="skillsPageSize">
      <Navigation />
      <PortfolioHandle />
      <ScrollToTop smooth />
    </div>
  );
};

export default Portfolio;
