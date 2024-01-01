import React from "react";
import Hero from "../../components/HeroSection/Hero";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Jobs from "../jobs/Jobs";
import Category from "../categoryCity/Category";

function Main() {
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <Hero></Hero>
      <Category></Category>
      <Jobs></Jobs>
      <Footer></Footer>
    </div>
  );
}

export default Main;
