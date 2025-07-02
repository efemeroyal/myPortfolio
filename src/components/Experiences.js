function Experiences() {
  const experiences = [
    {
      dateRange: "2022-2024",
      jobTitle: "Frontend Developer",
      company: null,
      description:
        "Worked on multiple frontend projects within this time frame",
      skills: ["React", "JavaScript", "CSS", "HTML"],
    },
    // Add more experiences here
  ];

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

      {experiences.map((experience, index) => (
        <div key={index} className="timeline__item">
          <h3>{experience.dateRange}</h3>
          <h4>{experience.jobTitle}</h4>
          <p>{experience.company}</p>
          <p>{experience.description}</p>
          <ul>
            {experience.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experiences;
