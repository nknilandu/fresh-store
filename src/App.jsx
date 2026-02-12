import React from "react";
import Banner from "../component/Banner/Banner";
import Category from "../component/Category/Category";
import Products from "../component/Products/Products";
import Footer from "../component/Footer/Footer";
import AboutSection from "../component/AboutSection/AboutSection";
import Navbar from "../component/Navbar/Navbar";

const App = () => {
  return (
    <div className="bg-[#fafafa]">
      <Navbar></Navbar>
      <div className="px-5 max-w-7xl mx-auto">
        <Banner></Banner>
        <Category></Category>
        <Products></Products>
        <AboutSection></AboutSection>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
