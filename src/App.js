import "./App.css";
import Weather from "./Weather";
import Hero from "./Hero";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <div className="container_hero">
        <Hero />
        <Weather />
      </div>
      <Footer />
    </div>
  );
}

export default App;
