import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutMe from "./components/aboutMe/AboutMe";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <AboutMe/>
      <h1>This is working for now...</h1>
    </div>
  );
}

export default App;
