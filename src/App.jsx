import "./assets/styles/App.css";
import React, { useState, useEffect } from "react";
import { MainRoutes } from "./routes/MainRoutes";
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [state, setState] = useState([{ tours: [] }]);

  const getGigs = async () => {
    let { data: data, error } = await supabase.from("gigs").select("*");
    setState({ tours: data });
  };

  useEffect(() => {
    getGigs();
  }, []);
  return <MainRoutes props={state} />;
}

export default App;
