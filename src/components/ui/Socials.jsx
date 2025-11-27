import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";

export default function Socials({ type = "hidden" }) {
  if (type === "hidden") {
    return (
      <div
        className={`hidden flex-row items-center justify-center gap-3 *:scale-110 *:cursor-pointer hover:*:text-accent/90 focus:*:text-accent/90 *:transition *:text-accent/80 md:flex`}
      >
        <a href="www.github.com/efemeroyal" target="_blank">
          <SiGithub />
        </a>
        <a href="www.facebook.com" target="_blank">
          <SiFacebook />
        </a>
        <a href="www.linkedin.com" target="_blank">
          <SiLinkedin />
        </a>
      </div>
    );
  }
  return (
    <div
      className={`flex flex-row items-center justify-center gap-3 *:scale-110 *:cursor-pointer hover:*:text-accent/90 focus:*:text-accent/90 *:transition *:text-accent/80 md:hidden`}
    >
      <a href="www.github.com/efemeroyal" target="_blank">
        <SiGithub />
      </a>
      <a href="www.facebook.com" target="_blank">
        <SiFacebook />
      </a>
      <a href="www.linkedin.com" target="_blank">
        <SiLinkedin />
      </a>
    </div>
  );
}
