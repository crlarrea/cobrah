import "./assets/styles/App.css";
import { MainRoutes } from "./routes/MainRoutes";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cobrah</title>
        <link rel="canonical" href="https://cobrah.onrender.com" />
      </Helmet>
      <MainRoutes />
    </HelmetProvider>
  );
}

export default App;
