import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Jaunelia from "../pages/Jaunelia";
import Mohsinnaqvi from "../pages/Mohsinnaqvi";
import MirzaGalib from "../pages/MirzaGalib";
import Cokestudio from "../pages/Cokestudio";
import Nusrat from "../pages/Nusrat";
import Shayari from "../pages/Shayari";

function AppRouter() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/jaunelia" element={<Jaunelia />} />
        </Routes>
        <Routes>
          <Route path="/mohsinnaqvi" element={<Mohsinnaqvi />} />
        </Routes>
        <Routes>
          <Route path="/mirzagalib" element={<MirzaGalib />} />
        </Routes>
        <Routes>
          <Route path="/Nusrat" element={<Nusrat />} />
        </Routes>
        <Routes>
          <Route path="/Coke-Studio" element={<Cokestudio />} />
        </Routes>
        <Routes>
          <Route path="/Shayari" element={<Shayari />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default AppRouter;
