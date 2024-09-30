import Image from "next/image";
import {
  faArrowRight,
  faLeaf,
  faBullseye,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const Grid = ({ title, text, icon }) => (
  <div className="flex flex-col gap-2 pr-8 max-lg:pb-16 max-md:pr-0 max-md:w-[50%]">
    <FontAwesomeIcon className="mb-2" icon={icon} width={30} height={30} />
    <h5 className="h5 ">{title}</h5>
    <p className="body-medium"> {text}</p>

    <span className="flex items-center gap-1">
      <p className="body-medium"> learn more</p>
      <FontAwesomeIcon icon={faArrowRight} width={15} height={15} />
    </span>
  </div>
);

const Product = () => {
  return (
    <section
      id="product"
      className="w-full flex justify-center product-bg pb-24"
    >
      <div className="w-full flex p-4 items-center justify-center flex-col pt-20">
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
        <div className="w-full relative z-10">
          <Image
            className=" absolute float right-[-20px] top-[17%] max-md:hidden max-lg:w-40 "
            src="./images/pyramid.png"
            width={200}
            height={200}
            alt="product image"
          />

          <Image
            src="./images/product.png"
            width={1250}
            height={1250}
            alt="product image"
          />
          <Image
            className=" absolute float left-[-20px] top-1/2 max-lg:w-40 max-md:hidden"
            src="./images/torus.png"
            width={180}
            height={180}
            alt="product image"
          />
        </div>
        <div className="w-[92%] grid grid-cols-4 max-md:place-items-center   max-lg:grid-cols-2 max-md:grid-cols-1 ">
          <Grid
            icon={faLeaf}
            text="Track your progress and motivate your efforts everyday."
            title="Integration ecosystem"
          />
          <Grid
            icon={faBullseye}
            text="Set and track goals withmanageable task breakdowns."
            title="Goal setting and tracking"
          />
          <Grid
            icon={faLock}
            text="Ensure your data’s safety with top-tier encryption."
            title="Secure data encryption"
          />
          <Grid
            icon={faBell}
            text="Get alerts on tasks and deadlines that matter most."
            title="Customizable notifications"
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
