import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "1", author: "Max", text: "Learning React is fun." },
  { id: "2", author: "Daniel", text: "I think, thus I am." },
  { id: "3", author: "Nemir", text: "So muss sein." },
];

export default function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}
