import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import { useEffect, useState } from "react";
import Experiences from "./components/Experiences";
import Services from "./components/Services";
import Projects from "./components/Projects";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const state = {
    experiences: [
      {
        dateRange: "2021-2023",
        jobTitle: "Junior Frontend Developer",
        company: null,
        description:
          "Built and maintained multiple websites, honing skills in the following technologies",
        skills: ["Front-end Development", "HTML5", "CSS3", "JavaScript (ES6+)"],
      },
      {
        dateRange: "2023-2024",
        jobTitle: "Web Motion and Design",
        company: null,
        description:
          "Created engaging web experiences with motion design utilizing the following technologies",
        skills: [
          "Motion Design",
          "GSAP",
          "3D Design",
          "UI/UX Design (Figma)",
          "Spline",
        ],
      },
      {
        dateRange: "2023-2025",
        jobTitle: "Senior Frontend Developer",
        company: "JaanTech",
        description:
          "Developed multiple scalable and efficient web applications using the following",
        skills: [
          "React",
          "NextJS",
          "Saas/SCSS",
          "TypeScript",
          "Tailwind CSS",
          "Python",
          "Version Control (Git / GitHub)",
        ],
      },
    ],
    services: [
      {
        title: "Website Development",
        description: "I build responive and mobile-friendly websites",
        features: ["Responsive design", "Custom layouts", "Contact forms"],
        technologies: ["HTML5", "CSS3", "JavaScript"],
      },
      {
        title: "Website Applications",
        description: "I develop web applications with React and Node.js",
        features: ["User authentication", "Data storage", "API integration"],
        technologies: ["React", "Node.js", "Restful APIs"],
      },
      {
        title: "Design Implementation",
        description: "I bring designs to life with Figma and CSS",
        features: [
          "Custom design",
          "Interactive elements",
          "Responsive layouts",
        ],
        technologies: ["Figma", "CSS", "JavaScript"],
      },
    ],
  };

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
      <Experiences experiences={state.experiences} />
      <Services services={state.services} />
      <Projects />
    </div>
  );
}
