import React from "react";
import Hero from "../../components/HeroSection/Hero";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Jobs from "../jobs/Jobs";

function Main() {
  return (
    <div className="lg:w-3/4 mx-auto ">
      <Navbar></Navbar>
      <Hero></Hero>
      <Jobs></Jobs>
      <Footer></Footer>
    </div>
  );
}

export default Main;
