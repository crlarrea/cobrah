import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Merch = () => {
  const [merch, setMerch] = useState([]);

  const getMerch = async () => {
    let { data: data, error } = await supabase
      .from("merch")
      .select("*")
      .order("item_name", { ascending: true });

    setMerch(data);
    console.log(merch);
  };

  useEffect(() => {
    getMerch();
  }, []);

  return (
    <section className="merch">
      <article>
        <h2>merch</h2>
      </article>

      <article>
        {merch.map((el) => {
          return (
            <Link to={el.link_url} target="_blank">
              <div key={el.id}>
                <p>
                  {new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "USD",
                  }).format(el.item_price)}
                </p>
                <img src={el.image_url} />

                {el.item_name}
              </div>
            </Link>
          );
        })}
      </article>
    </section>
  );
};
