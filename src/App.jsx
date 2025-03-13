import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import About from "./component/About me/About";
import Services from "./component/Services/Services";
import Work from "./component/MyWork/Work";
import Contact_me from "./component/Contact Me/Contact_me";
import Footer from "./component/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Work></Work>
      <Contact_me></Contact_me>
      <Footer></Footer>
    </div>
  );
};

export default App;
