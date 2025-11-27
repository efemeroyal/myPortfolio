// import "../styles/About.css";

import Button from "../ui/Button";

function About() {
  return (
    <section
      id="about"
      className="bg-secondary p-6 grid grid-cols-1 gap-4 items-center md:grid-cols-2"
    >
      <div className="flex justify-center items-start">
        <div className="w-[48rem] h-[25rem] relative md:h-[30rem] lg:h-[35rem]">
          <img
            src="/me 2.png"
            alt="Me"
            className="w-full h-full object-cover object-left-center bg-red-300"
          />
        </div>
      </div>

      <div className="flex-col items-start">
        <h2 className="font-title tracking-wide text-xl text-text font-[600] mb-6 md:text-2xl lg:text-3xl">
          With Royal Pride and a Humble Heart:
          <span className="text-accent text-xl md:text-2xl">
            {" "}
            Here's My Story
          </span>
        </h2>

        <p className="font-body mb-8 text-[1rem] text-text/80">
          From skeptic to software engineer, my journey has been a wild ride.{" "}
          <br />
          Growing up in tech-savvy surroundings, I once thought coding was for
          special people. <br />
          Fortunately curiosity got the best of me. Now, I'm driven to build a
          safer, better world - one line of code at a time. <br />
          I bring a personal touch and a "Royal Flair" to my work, <br />
          prioritizing trust, honesty, unity and a better tomorrow to guide my
          work. <br />
          Let's create something amazing together!
        </p>

        <div className="mb-4">
          <Button type="accent">Download CV</Button>
        </div>
      </div>
    </section>
  );
}

export default About;
