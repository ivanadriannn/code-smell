import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContentPage from "./views/ContentPage";
import HomePage from "./views/HomePage";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import config from "./config/particleconfig.json";
import Footer from "./components/Footer/Footer";
import DetailContentPage from "./views/DetailContentPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {};

  return (
    <>
      {init && (
        <Particles
          className="-z-10 fixed"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={config as any}
        />
      )}
      <Navbar />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/detail/:id" element={<DetailContentPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
