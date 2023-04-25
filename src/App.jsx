import Header from "./components/Header/header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Residencies from "./Residencies/Residencies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
    </div>
  );
}

export default App;
