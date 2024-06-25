import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Footer } from "./components/footer";
import { Story } from "./pages/story";
import { Portfolio } from "./pages/portfolio";
import { Connect } from "./pages/connect";  

import "./common/global.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
