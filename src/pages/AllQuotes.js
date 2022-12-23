import React, { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import NoQuotesFounds from "../components/quotes/NoQuotesFound";

export default function AllQuotes() {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFounds />;
  }

  return <QuoteList quotes={loadedQuotes} />;
}
