import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ title, desc, href, icon }) {
  return (
    <div className="bg-secondary relative flex items-start justify-start flex-col gap-2 p-4 md:h-[17rem] transition hover:-translate-y-1 hover:shadow-[0_0_0_2px] hover:shadow-accent/50 focus:shadow-[0_0_0_2px] focus:shadow-accent/70">
      <p className="text-accent/90 mb-2">{icon}</p>
      <h2 className="font-title tracking-wide text-[1rem] font-bold mb-3 md:text-xl">
        {title}
      </h2>
      <p className="text-[0.9rem]">{desc}</p>

      <a
        href={href}
        className="text-accent text-[.9rem] flex gap-2 items-center justify-center md:absolute md:top-[85%]"
      >
        Show More
        <FaArrowRight size={10} />
      </a>
    </div>
  );
}
