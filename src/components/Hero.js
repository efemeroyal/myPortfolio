import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home">
      <div className="left">
        <h1>
          Hey there, I'm <span className="highlight">Efeme Royal</span>
        </h1>
        <h2>
          A king in <span className="highlight">everything I do</span>
        </h2>

        <div className="box">
          <p>Ready to experience the power of Royalty ??</p>
        </div>

        <div className="buttons">
          <a href="#about" className="btn btn--accent">
            See More
          </a>
          <a href="#" className="btn btn--outline">
            Download CV
          </a>
        </div>
      </div>
      <div className="right">
        <div className="img-container">
          <img src="/me transparent.png" alt="Profesional looking pic" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
