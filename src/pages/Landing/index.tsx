import React from "react";
import Info from "../../components/Info";
import Footer from "../../components/Footer";
import Download from "../../components/Download";
import About from "../../components/About";

const Landing: React.FC = () => {
  return (
    <>
      <Info />
      <About />
      <Download />
      <Footer />
    </>
  );
};

export default Landing;
