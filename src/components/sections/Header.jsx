import { useEffect, useRef, useState } from "react";
import Socials from "../ui/Socials";
import gsap from "gsap";
import Logo from "../ui/Logo";

function Header() {
  const [showDarkHeader, setShowDarkHeader] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hambugerRef = useRef(null);
  const navLinksRef = useRef(null);
  const asideRef = useRef(null);
  const SCROLLTHRESHOLD = 100;

  function handleOpenMenu() {
    setIsMenuOpen((curState) => !curState);
  }

  useEffect(
    function () {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setShowDarkHeader(scrollPosition > SCROLLTHRESHOLD);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [SCROLLTHRESHOLD]
  );

  // GSAP Animations
  useEffect(function () {
    gsap.set(navLinksRef.current?.children, { opacity: 0, y: -20 });
    gsap.set(asideRef.current, { opacity: 0, y: -10 });
  }, []);

  useEffect(
    function () {
      if (isMenuOpen && navLinksRef.current) {
        gsap.to(asideRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
        gsap.to(navLinksRef.current?.children, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
        });
        gsap.to(hambugerRef.current.children[0], {
          rotation: 45,
          transformOrigin: "0 0",
          x: 4,
          y: -1,
          duration: 0.5,
        });
        gsap.to(hambugerRef.current.children[1], {
          opacity: 0,
          duration: 0.2,
        });
        gsap.to(hambugerRef.current.children[2], {
          rotation: -45,
          y: 1,
          transformOrigin: "0 0",
          duration: 0.5,
        });
      } else {
        gsap.to(asideRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.3,
        });
        gsap.to(navLinksRef.current?.children, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          stagger: 0.15,
        });
        gsap.to(hambugerRef.current.children[0], {
          rotation: 0,
          x: 0,
          y: 0,
          duration: 0.5,
        });
        gsap.to(hambugerRef.current.children[1], {
          opacity: 1,
          duration: 0.2,
        });
        gsap.to(hambugerRef.current.children[2], {
          rotation: 0,
          y: 0,
          duration: 0.5,
        });
      }
    },
    [isMenuOpen]
  );

  return (
    <header
      className={`flex justify-between items-center p-6 mb-2 sticky shadow top-0 left-0 z-50 transition-all ${showDarkHeader ? "bg-secondary shadow-md border-accent/30 border-b-2" : "bg-primary"}`}
    >
      <Logo text="Royal" />

      <nav className="hidden md:block">
        <ul className="flex justify-center items-center gap-8 font-title">
          <li className="capitalize">
            <a
              href="#home"
              className="text-text-500 font-semibold transition hover:text-text hover:outline-0 focus:text-text focus:outline-0"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-text-500 font-semibold transition hover:text-text hover:outline-0 focus:text-text focus:outline-0"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-text-500 font-semibold transition hover:text-text hover:outline-0 focus:text-text focus:outline-0"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-text-500 font-semibold transition hover:text-text hover:outline-0 focus:text-text focus:outline-0"
            >
              My Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-text-500 font-semibold transition hover:text-text hover:outline-0 focus:text-text focus:outline-0"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex">
        <div
          ref={hambugerRef}
          className="flex flex-col items-end gap-2 scale-[0.5] cursor-pointer md:hidden"
          tabIndex={1}
          onClick={handleOpenMenu}
        >
          <span className="w-10 h-[0.3rem] bg-accent inline-flex rounded-full"></span>
          <span className="w-7 h-[0.3rem] bg-accent inline-flex rounded-full"></span>
          <span className="w-10 h-[0.3rem] bg-accent inline-flex rounded-full"></span>
        </div>
        <Socials type="hidden" />
      </div>

      <aside
        ref={asideRef}
        className={`absolute w-[100vw] h-auto left-0 top-[101%] bg-secondary py-4 z-10 shadow shadow-primary md:hidden ${isMenuOpen ? "block" : "hidden"}`}
      >
        <nav>
          <ul
            ref={navLinksRef}
            className="flex flex-col justify-center items-center gap-4 font-title"
          >
            <li className="capitalize">
              <a
                href="#home"
                className="text-text-500 font-semibold transition hover:text-text hover:outline-0 focus:text-text focus:outline-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-text-500 font-semibold transition hover:text-text hover:outline-0 focus:text-text focus:outline-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-text-500 font-semibold transition hover:text-text hover:outline-0 focus:text-text focus:outline-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-text-500 font-semibold transition hover:text-text hover:outline-0 focus:text-text focus:outline-0"
              >
                My Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-text-500 font-semibold transition hover:text-text hover:outline-0 focus:text-text focus:outline-0"
              >
                Contact
              </a>
            </li>
            <Socials type="header" />
          </ul>
        </nav>
      </aside>
    </header>
  );
}

export default Header;
