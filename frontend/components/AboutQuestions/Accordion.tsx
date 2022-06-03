import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const questionsList = [
  {
    question: "Hur gör man för att... ?",
    answer:
      "Exercitation in fugiat est ut ad ea cupidatat ut incupidata toccaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },

  {
    question: "Vad betyder det när man...?",
    answer:
      "Exercitation in fugiat est ut ad ea cupidatat ut incupidata toccaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },

  {
    question: "Varför har jag blivit....?",
    answer:
      "Exercitation in fugiat est ut ad ea cupidatat ut incupidata toccaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
  },
];

type Props = {};

export default function Dropdown({}: Props) {
  return (
    <Accordion allowZeroExpanded>
      {questionsList.map((list, idx) => (
        <AccordionItem key={idx}>
          <AccordionItemHeading>
            <AccordionItemButton>{list.question}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>{list.answer}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
