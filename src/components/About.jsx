import React from "react";
import about from "../assets/images/about.webp";
export const About = () => {
  return (
    <section className="about">
      <article>
        <h2>COBRAH</h2>
        <p>
          Meet COBRAH, the electrifying Swedish artist redefining the music
          scene with her genre-blending, unapologetically bold sound! Bursting
          onto the scene with a fearless fusion of hyper-pop, techno, and edgy
          electronic beats, COBRAH commands attention with her magnetic presence
          and boundary-pushing aesthetics.
        </p>
        <p>
          Her provocative lyrics and hypnotic visuals create an immersive
          experience that is nothing short of mesmerizing. COBRAH's fierce
          persona and innovative style have quickly established her as a
          trailblazer in the industry, drawing comparisons to the likes of Lady
          Gaga and FKA Twigs. With each release, she shatters norms and
          redefines the future of pop music. Dive into the world of COBRAH and
          prepare to be captivated by an artist who is not just making waves but
          creating a tsunami of change in the music world.
        </p>
        <p>
          Experience the thrill, the intensity, and the unfiltered brilliance of
          COBRAH—where music meets art in the most explosive way!
        </p>
      </article>
      <article>
        <img src={about} loading="lazy" alt="" />
      </article>
    </section>
  );
};
