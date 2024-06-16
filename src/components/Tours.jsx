import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const Tours = () => {
  const [tours, setTours] = useState([]);

  const getGigs = async () => {
    let { data: data, error } = await supabase
      .from("gigs")
      .select("*")
      .order("event_date", { ascending: true });

    setTours(data);
  };

  useEffect(() => {
    getGigs();
  }, []);

  return (
    <section className="tours">
      <article>
        <h2>tours</h2>
      </article>
      <article>
        <table>
          <thead>
            <tr>
              <th>date</th>
              <th>venue</th>
              <th>location</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((el, index) => {
              return (
                <tr key={`event-${index}`}>
                  <td>
                    {new Intl.DateTimeFormat("en-GB", {
                      dateStyle: "short",
                    }).format(new Date(el.event_date))}
                  </td>
                  <td>{el.event_venue}</td>
                  <td>{el.event_location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
};
