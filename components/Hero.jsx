import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-g h-[100vh]  pt-16 pb-40 max-md:pt-32 max-md:pb-34 max-md:h-auto"
    >
      <div className="flex px-6 w-full h-[100vh] max-md:flex-col max-md:gap-14">
        <div className="flex items-start flex-1 flex-col justify-center gap-6 ">
          <div className="  flex tag px-4  items-center border-[1px] border-grayText rounded-xl">
            <p> Version 2.0 is here</p>
          </div>
          <h1 className="h1 max-md:h2">Pathway to productivity</h1>
          <p className="body-large w-[450px] ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="flex items-center ">
            <Button title="Get for free" />
            <p className="body-bold ml-4">learn more</p>
            <Image src="/images/arrow.svg" width={25} height={25} alt="arrow" />
          </div>
        </div>
        <div className="relative flex-1 max-lg:right-[-25%] max-md:right-0 ">
          <Image
            className=" absolute float left-6  max-lg:left-[-120px] max-md:hidden "
            src="/images/cylinder.png"
            width={170}
            height={170}
            alt="hero-image"
          />
          <Image
            className=" absolute right-2 max-md:right-12  max-lg:w-[500px] max-lg:h-[500px] max-md:w-[320px] max-md:h-[320px] rotate"
            src="/images/Visual.png"
            width={500}
            height={500}
            alt="hero-image"
          />
          <Image
            className=" absolute right-0 float bottom-[-20px] max-md:hidden"
            src="/images/half-torus.png"
            width={180}
            height={180}
            alt="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
