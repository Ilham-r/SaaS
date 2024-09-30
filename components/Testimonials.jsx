import Image from "next/image";
import React from "react";
const SmallCard = () => (
  <div className="flex flex-1 flex-col shadow-custom p-7 mb-7 rounded-[20px] gap-3">
    <p className="body-medium">
      As a seasoned designer always on the lookout for innovative tools,
      Framer.com instantly grabbed my attention.
    </p>
    <div className="flex gap-4 items-center ">
      <Image
        src="/images/jane.png"
        width={42}
        height={42}
        className="rounded-full"
      />
      <div>
        <p className="body-bold">Jane Doe</p>
        <p className="body-medium">@JaneDoe</p>
      </div>
    </div>
  </div>
);
const n = 6;
const smallCards = Array.from({ length: n }, (_, i) => <SmallCard key={i} />);

const Testimonials = () => {
  return (
    <section id="offers" className="w-full flex justify-center pb-24">
      <div className="w-full flex p-4 items-center justify-center flex-col pt-20">
        <div className="flex tag px-4  items-center border-[1px] border-grayText rounded-xl gap-3">
          <p> Testimonials</p>
        </div>
        <p className="h2 text-center">What our users say</p>
        <div className=" flew columns-3   pt-20 px-28 gap-7 max-md:columns-1">
          {smallCards}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
