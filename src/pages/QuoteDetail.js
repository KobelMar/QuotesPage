import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import React, { Fragment, useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const DUMMY_QUOTES = [
  { id: "1", author: "Max", text: "Learning React is fun." },
  { id: "2", author: "Daniel", text: "To think, so I am." },
  { id: "3", author: "Nemir", text: "So muss sein." },
];

export default function QuoteDetail() {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  const match = useRouteMatch();
  const params = useParams();

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found</p>;
  }

  const quote = loadedQuote;

  if (!quote) {
    return <p> no quote found.</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <Link className="btn--flat" to={`${match.url}/comments`}>
          Load Comments
        </Link>
      </Route>
      <Route path={`${match.path}/comments`} exact>
        <Comments />
      </Route>
    </Fragment>
  );
}
