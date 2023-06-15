import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import NavBar from "./NavBar";
import Home from "./Home";
import Footer from "./Footer";
export default function App(props) {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
