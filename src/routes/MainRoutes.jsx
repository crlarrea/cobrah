import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Main } from "../components/Main";
import { SpotifyPlayer } from "../components/SpotifyPlayer";
import { Footer } from "../components/Footer";

export const MainRoutes = () => (
  <>
    <BrowserRouter>
      <header></header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
              </>
            }
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  </>
);
