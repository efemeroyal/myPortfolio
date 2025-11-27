import { FaArrowRight } from "react-icons/fa";

export default function ServiceCardIntro({ href, title }) {
  return (
    <a href={href}>
      <article className="flex justify-start items-center gap-4 lg:pb-2 lg:border-b lg:border-secondary">
        <div className="h-28 w-36 bg-stone-700 radius-md md:h-24 md:w-40 lg:w-48 lg:h-24" />
        <div className="flex gap-4 items-center justify-center">
          <h3 className="text-[1rem] whitespace-nowrap">{title}</h3>
          <a href={href} className="flex items-center text-accent">
            <FaArrowRight size={13} />
          </a>
        </div>
      </article>
    </a>
  );
}
