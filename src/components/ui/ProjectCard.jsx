import Button from "./Button";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

export default function ProjectCard({
  status,
  imgSrc,
  title,
  desc,
  githubLink,
  liveLink,
}) {
  return (
    <div className="relative flex justify-start items-center flex-col gap-2  md:items-start">
      {/* Grid card */}
      <div
        className={`w-[8rem] h-8 flex items-center justify-left px-4 rounded-[7px] absolute top-[6px] left-[5.5rem] md:left-1 ${status === "pending" ? "bg-secondary" : "bg-accent/70"}`}
      >
        <p className="font-title text-sm tracking-wide uppercase">{status}</p>
      </div>
      <div className="bg-secondary w-[18rem] h-[20rem] clip"></div>
      {/* Project Title */}
      <h2 className="font-heading text-xl">{title}</h2>
      {/* Project Description */}
      <p className="text-[1rem] font-body text-wrap">{desc}</p>
      <div className="flex items-center gap-4 mt-3 mb-6">
        <Button
          target="blank"
          href={githubLink}
          type="primary"
          disabled={status === "pending" ? true : false}
        >
          View Code <SiGithub />
        </Button>
        <Button
          target="blank"
          href={liveLink}
          type="accent"
          disabled={status === "pending" ? true : false}
        >
          Live Preview <FiExternalLink className="text-[.9rem]" />
        </Button>
      </div>
    </div>
  );
}
