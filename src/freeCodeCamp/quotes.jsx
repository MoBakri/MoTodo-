import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiQuote } from "./config.json";
import QuoteCard from "./components/quoteCard";
import { CSSTransition } from "react-transition-group";
export default function App() {
  const [randNum, setRandNum] = useState(0);
  const [quotes, setQuotes] = useState({ data: null, loading: true });
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const randColor = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => {
    axios(apiQuote)
      .then((response) => response.data.quotes)
      .then((quote) => setQuotes({ data: quote, loading: false }));
  }, []);
  const quoteInfo = quotes.loading ? "loading..." : quotes.data;
  const quoteObject = quoteInfo[randNum];

  useEffect(() => {
    document.body.style.backgroundColor = `${randColor}`;
    document.body.style.transition = "background-color 2s";
  }, [randColor]);
  return (
    <CSSTransition
      in={quoteInfo[randNum]}
      classNames="quote-box"
      timeout={1000}
      appear
    >
      <QuoteCard
        randColor={randColor}
        setRandNum={setRandNum}
        quoteInfo={quoteInfo}
        quoteObject={quoteObject}
      />
    </CSSTransition>
  );
}
