/** @format */

import React from "react";
import Header from "../HeaderSection/Header";
import Work from "../compontents/Work";
import AboutUs from "../compontents/AboutUs";
import Career from "../compontents/Career";
import Insight from "../compontents/Insight";
import Footer from "../FooterSection/Footer";
import View from "../compontents/View";


import { Route, Routes } from "react-router-dom";

const Homes = () => {
  return (
    <>
      <Header />
       <View/>
      <Routes>
        <Route exact path='/' element={<Work/>} />
        <Route exact path='/' />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/insight' element={<Insight/>} />
      </Routes>
      <Footer />
    </>
  );
};
export default Homes;
