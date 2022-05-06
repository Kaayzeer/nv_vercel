import Image from "next/image";
import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

type Props = {};

const footerInfo = {
  name: ["services", "the company", "contact"],
  serviceInfo: ["find a domain", "buy a domain", "sell your domain"],
  companyInfo: ["about next venture", "what our costumers say", "policys"],
  contactInfo: ["contact information", "lorem ipsum", "lorem ipsum"],
};

export default function Footer({}: Props) {
  return (
    <>
      <div className="w-full max-h-699 bg-footer-background-sm md:bg-footer-background bg-center bg-cover bg-no-repeat mb-80 relative">
        <div className="customContainer  ">
          <div className=" grid-col2 md:grid-col3 h-screen px-8 ">
            <div className=" md:flex-start-top mt-20  lg:mt-40 w-full space-y-2 ">
              <h1 className="section-sub-title">Services</h1>
              <p className="section-sub-paragraph">Find a domain</p>
              <p className="section-sub-paragraph">buy a domain</p>
              <p className="section-sub-paragraph">Sell your domain</p>
            </div>
            <div className=" md:flex-start-top mt-20 lg:mt-40 w-full  space-y-2 ">
              <h1 className="section-sub-title">the company</h1>
              <p className="section-sub-paragraph">about next venture</p>
              <p className="section-sub-paragraph">what our costumers say</p>
              <p className="section-sub-paragraph">policys</p>
            </div>
            <div className="-mt-60  md:flex-start-top md:mt-20 lg:mt-40 w-full   space-y-2  ">
              <h1 className="section-sub-title">contact</h1>
              <p className="section-sub-paragraph">contact information</p>
              <p className="section-sub-paragraph">lorem ipsum</p>
              <p className="section-sub-paragraph">lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-row bottom-5 right-10 2xl:right-40 md: gap-10 xl:gap-20 ">
          <Image src="/icons/instagramIcon.svg" height={30} width={30} />
          <Image src="/icons/facebookIcon.svg" height={32} width={32} />
          <Image src="/icons/twitterIcon.svg" height={26} width={32} />
          <Image src="/icons/linkedInIcon.svg" height={28} width={27} />
        </div>
      </div>
    </>
  );
}
