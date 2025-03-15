import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/global.css";
import "../styles/common.css";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

const HomeScreen = lazy(() => import("../screens/home/HomeScreen"));
const ThankyouScreen = lazy(() => import("../screens/thanks/ThanksScreen"));

export const Router = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path="/thanks" element={<ThankyouScreen />} />
    </Routes>
  );
};
