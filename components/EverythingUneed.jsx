import React from "react";
import Image from "next/image";

const Card = ({ text, image, title }) => (
  <div className="flex shadow-custom flex-1 items-center justify-center flex-col text-center rounded-[20px] p-[80px] max-md:px-11 ">
    <Image className="float" src={image} width={200} height={200} />
    <p className="h4">{title}</p>
    <p className="body-medium">{text}</p>
  </div>
);

const EverythingUneed = () => {
  return (
    <section id="offers" className="w-full flex justify-center pb-24">
      <div className="w-full flex p-4 items-center justify-center flex-col pt-20">
        <div className="w-[80%] px-44 flex flex-col text-center items-center justify-center gap-10 max-lg:px-8 max-md:w-full max-md:px-4">
          <div className="flex tag px-4  items-center border-[1px] border-grayText rounded-xl gap-3">
            <p> Everything you need</p>
          </div>
          <h2 className="h2"> Streamlined for easy management</h2>
          <p className="body-large text-center">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="w-full flex py-14 px-28 max-lg:p-14 gap-8 max-lg:flex-wrap">
          <Card
            image="./images/helix.svg"
            title="Integration ecosystem"
            text="Enhance your productivity by connecting with your favorite tools, keeping all your
 essentials in one place."
          />
          <Card
            image="./images/cube.png"
            title="Goal setting and tracking"
            text=" Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
          />
        </div>
      </div>
    </section>
  );
};

export default EverythingUneed;
