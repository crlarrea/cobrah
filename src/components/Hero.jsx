import React from "react";
import manic from "../assets/images/manic.mp4";
import { SpotifyPlayer } from "./SpotifyPlayer";


export const Hero = () => {
  return (
    <section className="hero">
      <article>
        <video loop autoPlay muted>
          <source src={manic} type="video/mp4" />
        </video>
        <div></div>
      </article>
    </section>
  );
};
