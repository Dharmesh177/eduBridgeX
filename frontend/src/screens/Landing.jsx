import React from "react";
// Sections
import TopNavbar from "../Components/Nav/TopNavbar";
import Header from "../Components/Sections/Header";
import About from "../Components/Sections/About"
import Blog from "../Components/Sections/Blog";
import Contact from "../Components/Sections/Contact";
import Footer from "../Components/Sections/Footer"
import "../style/flexboxgrid.min.css";
import '../style/index.css';

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </>
  );
}


