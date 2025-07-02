function Experiences() {
  const experiences = [
    {
      dateRange: "2020-2022",
      jobTitle: "Frontend Developer",
      company: "ABC Corporation",
      description:
        "Developed responsive website for e-commerce platform, resulting in a 30% increase in sales",
      skills: ["React", "JavaScript", "CSS", "HTML"],
    },
    // Add more experiences here
  ];

  return (
    <div className="timeline">
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="timeline-item">
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
    </div>
  );
}

export default Experiences;
