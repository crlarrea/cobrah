import React, { useState, useEffect } from "react";
import { SpotifyPlayer } from "./SpotifyPlayer";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Music = () => {
  const [music, setMusic] = useState([]);

  const getMusic = async () => {
    let { data: data, error } = await supabase
      .from("music")
      .select("*")
      .order("song_name", { ascending: true });

    setMusic(data);
  };

  useEffect(() => {
    getMusic();
  }, []);
  return (
    <section className="music">
      <article>
        <h2>music</h2>
        {music.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.image_url} />
              <p>{el.song_name}</p>
            </div>
          );
        })}
      </article>
      <article>
        <SpotifyPlayer />
      </article>
    </section>
  );
};
