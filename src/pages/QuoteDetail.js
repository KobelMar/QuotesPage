import { useParams, Route } from "react-router-dom";

import React, { Fragment } from "react";

import Comments from "../components/comments/Comments";

export default function QuoteDetail() {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quotes Detail Page. </h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`} exact >
        <Comments />
      </Route>
    </Fragment>
  );
}
