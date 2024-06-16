import React from "react";
import manic from "../assets/images/manic.mp4";
import { SpotifyPlayer } from "./SpotifyPlayer";
import logo from "../assets/images/logo.webp";
export const Main = () => {
  return (
    <section className="hero">
      <article>
        <video loop autoPlay muted>
          <source src={manic} type="video/mp4" />
        </video>
        <div></div>
      </article>
      <article>
        <img src={logo} alt="" />
        <SpotifyPlayer />
      </article>
    </section>
  );
};
