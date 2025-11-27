import Button from "../ui/Button";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col justify-between items-center gap-8 p-6 font-calibri md:flex-row md:gap-4 md:px-8 md:py-6"
    >
      <div className="flex basis-1/2 flex-grow flex-shrink flex-col justify-center items-center w-full text-text-500 md:order-10 md:items-start">
        <h1 className="font-heading capitalize whitespace-nowrap leading-[1.5] text-[2rem] md:text-[2.25rem] lg:text-[2.75rem]">
          Hey there, <span className="text-text">I'm Efeme Royal</span>
        </h1>
        <h2 className="capitalize font-heading whitespace-nowrap leading-[1.5] text-[1.6rem] lg:text-[2rem] md:text-3xl">
          A king in <span className="text-text">everything I do</span>
        </h2>

        <div className="my-4 border-0 border-l-4 border-accent text-text py-2 px-4">
          <p className="font-body text-[1rem] md:text-[1.1rem]">
            Ready to experience the power of Royalty ??
          </p>
        </div>

        <div className="flex justify-center items-center gap-[1rem]">
          <Button href="#about">See more</Button>
          <Button href="#" type="accent">
            Download CV
          </Button>
        </div>
      </div>

      <div className="flex basis-1/2 flex-grow flex-shrink justify-center items-center order-11">
        <div className="w-[20rem] relative -mt-[3rem] z-10 before:content-[''] before:absolute before:w-[22rem] before:h-[16rem] before:top-[90%] before:left-[60%] before:bg-secondary before:z-[-1] before:translate-x-[-60%] before:translate-y-[-110%]  before:animate-blob md:w-[20rem] md:before:w-[22rem] md:before:h-[17rem] lg:w-[25rem] lg:before:w-[33rem] lg:before:h-[23rem]">
          <img
            src="/me transparent.png"
            alt="Profesional looking pic"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
