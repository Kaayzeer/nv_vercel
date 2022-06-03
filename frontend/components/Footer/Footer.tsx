import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

type Props = {};

const footerInfo = [
  {
    name: "services",
    sub1: "find a domain",
    sub2: "buy a domain",
    sub3: "sell your domain",
  },
  {
    name: "contact",
    sub1: "contact information",
    sub2: "lorem ipsum",
    sub3: "lorem ipsum",
  },

  {
    name: "the company",
    sub1: "about next venture",
    sub2: "what our customers say",
    sub3: "policys",
  },
];

export default function Footer({}: Props) {
  const [isDesktopWidth, setIsDesktopWidth] = useState(
    typeof window !== "undefined" && window.innerWidth > 645
  );

  // change jsx layout dynamically
  const updatePage = () => {
    setIsDesktopWidth(window.innerWidth > 645);
  };

  // combat sideeffect
  useEffect(() => {
    window.addEventListener("resize", updatePage);
    return () => window.removeEventListener("resize", updatePage);
  }, []);
  return (
    <>
      <div className="w-full max-h-699 bg-footer-background-sm md:bg-footer-background bg-center bg-cover bg-no-repeat relative overflow-hidden">
        <div className="customContainer  ">
          <div className=" flex flex-wrap sm:flex-nowrap h-screen px-8 ">
            {footerInfo.map((info, idx) => (
              <div
                key={idx}
                className=" mt-20 lg:mt-40 w-1/2 sm:w-full space-y-3 "
              >
                <h1 className="section-sub-title">{info.name.toUpperCase()}</h1>
                <p className="section-sub-paragraph capitalize">{info.sub1}</p>
                <p className="section-sub-paragraph capitalize">{info.sub2}</p>
                <p className="section-sub-paragraph capitalize">{info.sub3}</p>
              </div>
            ))}
          </div>
        </div>
        {isDesktopWidth && (
          <div className="absolute flex flex-row bottom-5 right-10 2xl:right-40 md: gap-10 xl:gap-20 ">
            <Image src="/icons/instagramIcon.svg" height={30} width={30} />
            <Image src="/icons/facebookIcon.svg" height={32} width={32} />
            <Image src="/icons/twitterIcon.svg" height={26} width={32} />
            <Image src="/icons/linkedInIcon.svg" height={28} width={27} />
          </div>
        )}
        {!isDesktopWidth && (
          <div className="absolute flex flex-row bottom-5 right-10 2xl:right-40 md: gap-10 xl:gap-20 ">
            <Image src="/icons/instagramIcon.svg" height={17} width={17} />
            <Image src="/icons/facebookIcon.svg" height={17} width={17} />
            <Image src="/icons/twitterIcon.svg" height={19} width={15} />
            <Image src="/icons/linkedInIcon.svg" height={17} width={17} />
          </div>
        )}
      </div>
    </>
  );
}
