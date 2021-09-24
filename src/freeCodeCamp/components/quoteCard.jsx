import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
const QuoteCard = ({ randColor, setRandNum, quoteInfo, quoteObject }) => {
  console.log(quoteInfo.indexOf(quoteObject));
  return (
    <SwitchTransition component={null}>
      <CSSTransition
        key={quoteInfo.indexOf(quoteObject)}
        timeout={{ exit: 500, enter: 500 }}
        classNames="quote-box-"
        mountOnEnter
      >
        <div id="quote-box" className="quote-box">
          <div id="text">
            <blockquote style={{ color: randColor }} className="blockquote">
              {quoteObject.quote && (
                <i className="fa fa-quote-left" aria-hidden="true"></i>
              )}{" "}
              <span>{quoteObject.quote}</span>{" "}
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </blockquote>
          </div>
          <figcaption
            style={{ color: randColor }}
            id="author"
            className="blockquote-footer"
          >
            <cite title="Source Title">{quoteObject.author}</cite>
          </figcaption>
          <button
            style={{ backgroundColor: randColor }}
            onClick={() =>
              setRandNum(Math.floor(Math.random() * quoteInfo.length))
            }
            className="btn btn-sm"
            id="new-quote"
          >
            new quote
          </button>
          <a
            style={{ backgroundColor: randColor }}
            href={`http://twitter.com/intent/tweet?hashtags=mo_quotes&text="${quoteObject.quote}" ${quoteObject.author}`}
            target="_blank"
            rel="noreferrer"
            id="tweet-quote"
          >
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          {/* <a
            style={{ backgroundColor: randColor }}
            href="http://tumblr.com"
            target="_top"
            id="tweet-quote"
          >
            <i className="fa fa-tumblr" aria-hidden="true"></i>
          </a> */}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default QuoteCard;
