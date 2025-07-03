import "../styles/Experiences.css";

function Experiences({ experiences }) {
  return (
    <section className="timeline">
      <div className="timeline__group">
        <div className="left">
          <h3 className="highlight">My Experience</h3>
          <h2 data-bgtext="My Career">
            Experience and <span className="highlight">Skills</span>
          </h2>
        </div>
        <div className="right">
          <p className="bio">
            Developed multiple websites and web applications from scratch and
            honed skills through them, focused on building functional and
            efficient solutions
          </p>
        </div>
      </div>

      <div className="timeline__contents">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline-item-content">
              <h5>{experience.dateRange}</h5>
              <h4>{experience.jobTitle}</h4>
              <h3>{experience.company ?? "Personal Project"}</h3>
              <p>{experience.description}</p>
              <ul>
                <li>{experience.skills.join(", ")}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
