import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import React, { Fragment } from "react";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "1", author: "Max", text: "Learning React is fun." },
  { id: "2", author: "Daniel", text: "To think, so I am." },
  { id: "3", author: "Nemir", text: "So muss sein." },
];

export default function QuoteDetail() {
  const match = useRouteMatch();
  const params = useParams();

  console.log(match);

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if (!quote) {
    return <p> no quote found.</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
      <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
      </Route>
      <Route path={`${match.path}/comments`} exact >
        <Comments />
      </Route>
    </Fragment>
  );
}
