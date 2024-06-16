import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  const getGallery = async () => {
    let { data: data, error } = await supabase.from("gallery").select("*");

    setGallery(data);
  };

  useEffect(() => {
    getGallery();
  }, []);
  return (
    <section className="gallery">
      <article>{/* <h2>gallery</h2> */}</article>
      <article>
        {gallery.map((el) => {
          return (
            <div key={el.id}>
              <img src={el.image_url} loading="lazy" />
            </div>
          );
        })}
      </article>
    </section>
  );
};
