import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

import Footer from "./Footer";



function App(props) {
  return (
    <div className="container">
      <div className="App">
        
          <Weather defaultCity="Paris" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
