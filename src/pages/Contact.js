import React from "react";
import ContactHandle from "../components/ContactHandle";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contactPageSize">
      {/* <div className="homePageSize"> */}
      <Navigation />
      <ContactHandle />
    </div>
  );
};

export default Contact;
