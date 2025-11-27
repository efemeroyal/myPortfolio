import { FaCode, FaPlayCircle, FaShapes } from "react-icons/fa";
import ServiceCard from "../ui/ServiceCard";
import ServiceCardIntro from "../ui/ServiceCardIntro";
import { FiFigma } from "react-icons/fi";
import Button from "../ui/Button";

const services = [
  {
    title: "Website Development",
    href: "#",
  },
  {
    title: "UI/UX Design",
    href: "#",
  },
  {
    title: "Logo Design",
    href: "#",
  },
  {
    title: "Web Motion",
    href: "#",
  },
];

const servicesCardObj = [
  {
    id: "SC01",
    title: "UI/UX Design",
    desc: "Create a beautiful and useful UI display for ease of use of the application for users",
    icon: <FiFigma className="w-7 h-7 md:w-10 md:h-8" />,
    href: "#",
  },
  {
    id: "SC02",
    title: "Website Development",
    desc: "Build a quality website with the best technology and have it delivered with 100% assurance",
    icon: <FaCode className="w-7 h-7 md:w-10 md:h-8" />,
    href: "#",
  },
  {
    id: "SC03",
    title: "Logo Design",
    desc: "Do you need a logo? Not a problem just get to me for a professional and minimalist logo",
    icon: <FaShapes className="w-7 h-7 md:w-10 md:h-8" />,
    href: "#",
  },
  {
    id: "SC04",
    title: "Web Motion",
    desc: "Does your website lacks animations and transitions?? I can help with that, have your static website transformed into a well animated one",
    icon: <FaPlayCircle className="w-7 h-7 md:w-10 md:h-8" />,
    href: "#",
  },
];

export default function Services() {
  return (
    <section id="services" className="p-6">
      <div className="flex flex-col gap-2 justify-center lg:gap-20 lg:flex-row">
        <div className="basis-1/2 grow shrink lg:py-12">
          <h2 className="font-title tracking-wide capitalize text-xl font-[600] mb-3 md:text-2xl">
            What can I do for you
          </h2>
          <p className="font-body text-[1rem] text-text/85 mb-8  lg:mt-4 lg:mb-16">
            It is easier to entrust the work to me and rest, knowing you will
            have the best results and your product will be of reliable quality.
          </p>
          <Button type="accent">Bring your idea to life!</Button>
        </div>
        <div className="font-body font-[600] grid grid-cols-1 gap-4 mt-6 basis-1/2 grow shrink text-text/85 md:grid-cols-2 lg:grid-cols-1">
          {services.map((service) => (
            <ServiceCardIntro
              key={service.title}
              href={service.href}
              title={service.title}
            />
          ))}
        </div>
      </div>
      <div className="font-body grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-4">
        {servicesCardObj.map((service) => (
          <ServiceCard
            key={service.id}
            href={service.href}
            title={service.title}
            desc={service.desc}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
