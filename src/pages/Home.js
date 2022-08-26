import React from "react";
import HomeHandle from "../components/HomeHandle";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="homePageSize">
      <Navigation />
      <HomeHandle />
    </div>
  );
};

export default Home;
