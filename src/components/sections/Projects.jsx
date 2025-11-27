import ProjectCard from "../ui/ProjectCard";

const projectsObj = [
  {
    id: "P002",
    status: "completed",
    title: "XO Tic Tac Toe",
    desc: "Interactive web tic tac toe application",
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: "P001",
    status: "pending",
    title: "Zenith",
    desc: "A habit and goal tracking web application like no other",
    githubLink: "#",
    liveLink: "#",
  },

  {
    id: "P003",
    status: "pending",
    title: "Weather Now",
    desc: "A classic weather web application with a stunning UI",
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: "P004",
    status: "pending",
    title: "Prsima",
    desc: "A modern event planinng and ticketing web application",
    githubLink: "#",
    liveLink: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="p-6">
      <div className="mb-12 flex justify-between items-center md:block">
        <h4 className="font-heading uppercase font-extrabold text-[0.75rem] text-accent tracking-wide order-4">
          Working Process
        </h4>
        <h2 className="font-title text-xl font-[600] md:text-2xl">
          Latest working projects
        </h2>
      </div>
      {/* Projects grid container */}

      <div className="grid grid-cols-1 gap-4  md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-4">
        {projectsObj.map((project) => (
          <ProjectCard
            key={project.id}
            status={project.status}
            title={project.title}
            desc={project.desc}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
}
