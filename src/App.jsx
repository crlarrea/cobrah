import "./assets/styles/App.css";
import React, { useState, useEffect } from "react";
import { MainRoutes } from "./routes/MainRoutes";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cobrah</title>
        <link rel="canonical" href="https://cobrah.onrender.com" />
      </Helmet>
      <MainRoutes />
    </>
  );
}

export default App;
