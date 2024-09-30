import Image from "next/image";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareInstagram,
  faPinterest,
  faYoutube,
  faTiktok,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="w-full flex  bg-black py-16 px-10 ">
      <div className=" flex w-full justify-between  max-md:flex-col ">
        <div className="flex flex-col justify-between  items-start w-1/3 pr-32 max-md:w-full max-md:gap-8 max-md:mb-20 ">
          <div className="flex flex-col justify-center items-start gap-5">
            <div className="gradient z-10 cursor-pointer  ">
              <Image src="/images/logo.png" width={40} height={40} alt="saas" />
            </div>
            <p className="body-small text-[#808080]">
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website.
            </p>
          </div>
          <div className="w-full flex gap-3 justify-start items-center  text-fColor">
            <FontAwesomeIcon icon={faSquareInstagram} width={24} height={24} />
            <FontAwesomeIcon icon={faXTwitter} width={24} height={24} />
            <FontAwesomeIcon icon={faPinterest} width={24} height={24} />
            <FontAwesomeIcon icon={faYoutube} width={24} height={24} />
            <FontAwesomeIcon icon={faTiktok} width={24} height={24} />
            <FontAwesomeIcon icon={faLinkedinIn} width={24} height={24} />
          </div>
        </div>
        <div className="grid grid-cols-4 text-[#7B7B7B] justify-start gap-12 max-md:grid-cols-1">
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-white">Product</p>
            <p>Features</p>
            <p>Integration</p>
            <p>Updates</p>
            <p>FAQ</p>
            <p>Pricing</p>
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-white">Company</p>
            <p>About</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Manifesto</p>
            <p>Press</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-white">Resources</p>
            <p>Examples</p>
            <p>Community</p>
            <p>Guides</p>
            <p>Docs</p>
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <p className="text-white">Legal</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Security</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
