import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun." },
  { id: "q2", author: "Daniel", text: "To think, so I am." },
  { id: "q3", author: "Nemir", text: "So muss sein." },
];

export default function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}
