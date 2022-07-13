import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Props = {};

const footerInfo = [
  {
    name: "services",
    sub1: "find a domain",
    link1: "/find",
    sub2: "buy a domain",
    link2: "/buy",
    sub3: "sell your domain",
    link3: "/sell",
  },
  {
    name: "contact",
    sub1: "contact information",
    link1: "/find",
    sub2: "lorem ipsum",
    link2: "/buy",
    sub3: "lorem ipsum",
    link3: "/sell",
  },
  {
    name: "the company",
    sub1: "about next venture",
    link1: "/about",
    sub2: "what clients say",
    link2: "/#testimonials",
    sub3: "policys",
    link3: "/policy",
  }
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
    <footer>
      <div className="w-full min-h-699 bg-footer-background-sm sm:bg-footer-background bg-center bg-cover bg-no-repeat relative overflow-hidden">
        <div className="customContainer">
          <div className=" flex flex-wrap sm:flex-nowrap px-20" >
            {footerInfo.map((info, idx) => (
              <div
                key={idx}
                className=" mt-20 lg:mt-40 w-1/2 sm:w-full space-y-3 "
              >
                <h1 className="section-sub-title">{info.name.toUpperCase()}</h1>

                <div className="flex flex-col gap-3">
                  <Link href={info.link1}>
                    <a className="section-sub-paragraph capitalize">
                      {info.sub1}
                    </a>
                  </Link>

                  <Link href={info.link2}>
                    <a className="section-sub-paragraph capitalize">
                      {info.sub2}
                    </a>
                  </Link>
                  <Link href={info.link3}>
                    <a className="section-sub-paragraph capitalize">
                      {info.sub3}
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute flex flex-row bottom-5 right-10 2xl:right-40 md: gap-10 xl:gap-20 ">
          <span className=" w-4 h-4 md:w-8 md:h-8">
            <Image src="/icons/instagramIcon.svg" height={30} width={30} />
          </span>
          <span className=" w-4 h-4 md:w-8 md:h-8">
            <Image
              className=" w-4 h-4 md:w-8 md:h-8"
              src="/icons/facebookIcon.svg"
              height={32}
              width={32}
            />
          </span>

          <span className=" w-4 h-4 md:w-8 md:h-8">
            <Image
              className=" w-4 h-4 md:w-8 md:h-8"
              src="/icons/twitterIcon.svg"
              height={26}
              width={32}
            />
          </span>

          <span className=" w-4 h-4 md:w-8 md:h-8">
            <Image
              className=" w-4 h-4 md:w-8 md:h-8"
              src="/icons/linkedInIcon.svg"
              height={28}
              width={27}
            />
          </span>
        </div>
        <div className="absolute bottom-0 w-1/4 md:w-full md:bottom-1 left-5  ">
          <div
            className="trustpilot-widget "
            data-locale="sv-SE"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="62ac621a4c0c5d7003a877b7"
            data-style-height="52px"
            data-style-width="100%"
          >
            <a
              href="https://se.trustpilot.com/review/weknowit.se"
              target="_blank"
              rel="noreferrer"
            >
              Trustpilot
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
