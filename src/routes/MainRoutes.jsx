import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Tours } from "../components/Tours";
import { Nav } from "../components/Nav";
import { Merch } from "../components/Merch";
import { Music } from "../components/Music";

export const MainRoutes = () => (
  <>
    <BrowserRouter>
      <header>
        <Nav />
      </header>

      <main>
        <Hero />
        <Routes>
        <Route path="/" element={<Music />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  </>
);
