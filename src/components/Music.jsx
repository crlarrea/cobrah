import React from "react";
import { SpotifyPlayer } from "./SpotifyPlayer";

export const Music = () => {
  return (
    <section className="music">
      <article>
        <h2>music</h2>
        <SpotifyPlayer />
      </article>
    </section>
  );
};
