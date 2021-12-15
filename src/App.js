import "./App.css";
import Weather from "./Weather";
import Hero from "./Hero";
import Footer from "./Footer";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container_hero">
        <Hero />
        <Weather />
      </div>
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
