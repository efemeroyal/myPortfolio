function NavBar({ switchTheme }) {
  return (
    <header>
      <div className="logo">
        <a href="#home">
          <span className="highlight"> ROYAL </span>
        </a>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <a href="#projects">My Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="theme-toggler active" onClick={switchTheme}></div>

      <div className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default NavBar;
