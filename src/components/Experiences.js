import "../styles/Experiences.css";

function Experiences() {
  const experiences = [
    {
      dateRange: "2021-2023",
      jobTitle: "Junior Frontend Developer",
      company: null,
      description: "Worked on multiple websites within this time frame",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      dateRange: "2023-2024",
      jobTitle: "Web Motion and Design",
      company: null,
      description: "Worked on multiple websites within this time frame",
      skills: ["GSAP", "3D Design", "Figma", "Spline"],
    },
    {
      dateRange: "2023-2025",
      jobTitle: "Senior Frontend Developer",
      company: "JaanTech",
      description: "Worked on multiple websites within this time frame",
      skills: ["React", "Saas", "TypeScript", "Python"],
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

      <div className="timeline__contents">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline-item-content">
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
