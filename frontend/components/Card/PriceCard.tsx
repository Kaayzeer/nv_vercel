import React from "react";
import LinkButton from "../ui-components/Button/LinkButton";

type Props = {
  page: "find" | "buy" | "sell";
};

const cards = {
  find: {
    price: "$495",
    title: "find",
    subTitle: "buy a selection of name options",
    buttonText: "order",
    list: ["comprehensive report", "transport process", "2 week delivery time"],
  },

  buy: {
    price: "$198",
    title: "buy",
    subTitle: "Find out if the domain can be yours.",
    buttonText: "order",
    list: ["ownership research", "contact attempts", "initial report"],
  },

  sell: {
    price: "$99/h",
    title: "sell",
    subTitle: "Assess the resale potential for your domain",
    buttonText: "free quote",
    list: ["free assessment", "free recommendation", "sales service quote"],
  },
};

export default function PriceCard({ page }: Props) {
  /* console.log("PAGE", cards[page]); */
  console.log(page);
  return (
    <>
      <div className="flex flex-col items-left justify-between mx-auto md:mx-0 -mt-60 md:mt-0 max-w-md p-10 2xl:p-20 w-full gap-10 bg-white rounded-lg shadow-signInCard">
        <h2 className="section-title lowercase text-4xl">
          {cards[page].price}
        </h2>
        <div className="md:space-y-5" >
          <span className="font-bold uppercase text-4xl">
            {cards[page].title}
          </span>
          <span className="pl-2 mb-0 align-top" >pilot</span>
          
          <p className="section-paragraph text-left text-sm">
            {cards[page].subTitle}
          </p>
        </div>

        <LinkButton
          linkHref={`/${page}form`}
          color="text-black"
          buttonText={cards[page].buttonText}
          type={"pagesBtn"}
        />

        <ul className="list-disc ml-5">
          {cards[page].list.map((item, idx) => (
            <li key={idx} className="li-paragraph2 ">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
