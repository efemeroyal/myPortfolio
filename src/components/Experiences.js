import "../styles/Experiences.css";

function Experiences() {
  const experiences = [
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
