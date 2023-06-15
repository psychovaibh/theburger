import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
import Menu from "./Menu";
import About from "./About";
import Book from "./Book";
export default function App(props) {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
