import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}
