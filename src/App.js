import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Stack from "./components/ui/Stack";

export default function App() {
  return (
    <div className="bg-primary relative">
      <Header />
      <Home />
      <Stack />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
