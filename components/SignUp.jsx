import Image from "next/image";
import React from "react";
import Button from "./Button";

const SignUp = () => {
  return (
    <section className="w-full flex product-bg justify-center items-center">
      <div className=" w-full flex relative justify-center items-center p-48 max-md:px-16">
        <Image
          className="absolute float right-16 top-1/3 max-lg:w-[340px] max-lg:h-[340px] max-lg:right-[-12%] max-md:hidden"
          src="/images/helix2.png"
          width={340}
          height={340}
        />
        <Image
          className="absolute float left-0 max-lg:w-[340px] max-lg:h-[340px] max-lg:left-[-10%] top-9 max-md:hidden"
          src="/images/star.png"
          width={340}
          height={340}
        />
        <div className="flex w-3/4 justify-center text-center items-center flex-col gap-7">
          <h2 className="h2"> Sign up for free today</h2>
          <p className="body-medium w-3/4">
            {" "}
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <div>
            <Button title="Get for free" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
