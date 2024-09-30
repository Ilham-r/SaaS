import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Free = [
  "Up to 5 project members",
  "Unlimited tasks and projects",
  "2GB storage",
  "Integrations",
  "Basic support",
];
const Pro = [
  "Up to 50 project members",
  "Unlimited tasks and projects",
  "50GB storage",
  "Integrations",
  "Priority support",
  "Advanced support",
  "Export support",
];
const Business = [
  "Up to 50 project members",
  "Unlimited tasks and projects",
  "200GB storage",
  "Integrations",
  "Dedicated account manager",
  "Custom fields",
  "Advanced analytics",
  "Export capabilities",
  "API access",
  "Advanced security features",
];

const Card = ({ type, price, list, colored, btext }) => (
  <div
    className={`flex shadow-custom flex-1 items-start ${
      colored ? "bg-black text-white" : "bg-white"
    }  flex-col rounded-[20px] px-7 py-11 gap-5  `}
  >
    <div className="flex w-full items-center justify-between">
      <p className="h5 text-grayText">{type}</p>{" "}
     
        {colored ? "<p className="tag bg-gradient-to-r px-4  items-center border-[1px] border-grayText rounded-xl gap-3 from-[#dd7dff] via-[#E1CD86] via-[#8BCB92]  to-[#3BFFFF] bg-clip-text text-transparent">Most popular</p> " : ""}
      
    </div>
    <p className="h2">
      {price}$<span className="body-medium text-grayText">/month</span>
    </p>
    <Button title={btext} colored={colored} />
    <div className=" flex w-full flex-col gap-3">
      {list?.map((item) => (
        <div className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faCheck} width={15} height={15} />{" "}
          <p> {item}</p>
        </div>
      ))}
    </div>
  </div>
);

const Prices = () => {
  return (
    <section id="prices" className="w-full flex justify-center">
      <div className="w-full flex p-4 items-center justify-center flex-col pt-8">
        <div className="w-[80%] px-44 flex flex-col text-center items-center justify-center gap-10 max-lg:px-8 max-md:w-full max-md:px-4">
          <div className="flex tag px-4  items-center border-[1px] border-grayText rounded-xl gap-3">
            <p> Boost your productivity</p>
          </div>
          <h2 className="h2"> A more effective way to track progress</h2>
          <p className="body-large text-center">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className="flex w-full justify-end items-end gap-4 px-32 py-24 max-lg:flex-col max-lg:items-center max-lg:px-8">
          <Card
            type="Free"
            price="0"
            list={Free}
            colored={false}
            btext="Get started for free"
          />
          <Card
            type="Pro"
            price="9"
            list={Pro}
            colored={true}
            btext="Sign up now"
          />
          <Card
            type="Business"
            price="9"
            list={Business}
            colored={false}
            btext="Sign up now"
          />
        </div>
      </div>
    </section>
  );
};

export default Prices;
