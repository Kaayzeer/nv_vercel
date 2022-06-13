import React from "react";
import Button from "../ui-components/Button/Button";

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
      <div className="flex flex-col items-left justify-between max-w-lg p-10 2xl:p-20 w-full gap-10 bg-white rounded-lg shadow-signInCard">
        <h2 className="section-title lowercase text-4xl">
          {cards[page].price}
        </h2>
        <div className="flex flex-col md:space-y-5">
          <h3 className="section-title2 uppercase text-4xl">
            {cards[page].title}
          </h3>
          <p className="section-paragraph text-left text-sm  ">
            {cards[page].subTitle}
          </p>
        </div>

        <Button
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
