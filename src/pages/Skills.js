import React from "react";
import Navigation from "../components/Navigation";
import SkillsHandle from "../components/SkillsHandle";
import ScrollToTop from "react-scroll-to-top";

const Skills = () => {
  return (
    <div className="pageSize">
      <Navigation />
      <SkillsHandle />
      <ScrollToTop smooth />
    </div>
  );
};

export default Skills;
