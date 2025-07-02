import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import { useEffect, useState } from "react";
import Experiences from "./components/Experiences";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(
    function () {
      document.body.className = theme;
    },
    [theme]
  );

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.querySelector(".theme-toggler").classList.toggle("active");
  };

  return (
    <div className="App">
      <NavBar switchTheme={toggleTheme} />
      <Hero />
      <About />
      <Experiences />
    </div>
  );
}
