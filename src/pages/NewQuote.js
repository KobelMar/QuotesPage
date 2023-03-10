import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useHttp from "../hooks/use-http";

import QuoteForm from "../components/quotes/QuoteForm";
import { addQuote } from "../lib/api";

export default function NewQuote() {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
}
 