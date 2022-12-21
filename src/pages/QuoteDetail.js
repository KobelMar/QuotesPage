import { useParams, Route } from "react-router-dom";

import React, { Fragment } from "react";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun." },
  { id: "q2", author: "Daniel", text: "To think, so I am." },
  { id: "q3", author: "Nemir", text: "So muss sein." },
];

export default function QuoteDetail() {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return <p> no quote found.</p>
  }

  return (
    <Fragment>
      <h1>Quotes Detail Page. </h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`} exact >
        <Comments />
      </Route>
    </Fragment>
  );
}
