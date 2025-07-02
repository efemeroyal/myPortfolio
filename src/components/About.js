import "../styles/About.css";

function About() {
  return (
    <section id="about">
      <div className="left">
        <div className="img-container">
          <img src="/me 2.jpg" alt="Me" />
        </div>
      </div>

      <div className="right">
        <h2 data-bgtext="ABOUT">
          With Royal Pride and a Humble Heart : <br />
          <span className="highlight">Efeme's Story</span>
        </h2>

        <p>
          From skeptic to software engineer, my journey has been a wild ride.{" "}
          <br />
          Growing up in tech-savvy surroundings, I once thought coding was for
          special people. <br />
          Fortunately gaming and curiosity got the best of me. Now, I'm driven
          to build a safer, better world - one line of code at a time. <br />
          I bring a personal touch and a "Royal Flair" to my work, <br />
          prioritizing trust, honesty, unity and a better tomorrow to guide my
          work. <br />
          Let's create something amazing together!
        </p>

        <div className="buttons">
          <a href="#" className="btn btn--accent">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
