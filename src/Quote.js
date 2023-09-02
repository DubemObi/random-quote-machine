import "./Quote.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareTumblr,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      text: "Click the New Quote button to fetch you a quote",
      author: "Author",
    };
    this.newQuoteHandler = this.newQuoteHandler.bind(this);
  }
  newQuoteHandler() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const randomColorNumber = Math.floor(Math.random() * 4) + 1;
    this.setState({
      text: `${quote["quote-" + randomNumber].text}`,
      author: `${quote["quote-" + randomNumber].author}`,
      color: randomColorNumber,
    });
  }

  render() {
    let colorCode;
    switch (this.state.color) {
      case 1:
        colorCode = "rgb(39, 174, 96)";
        break;
      case 2:
        colorCode = "rgb(231, 76, 60)";
        break;
      case 3:
        colorCode = "rgb(155, 89, 182)";
        break;
      case 4:
        colorCode = "rgb(243, 156, 18)";
        break;
      default:
        colorCode = "rgb(52, 34, 36)";
        break;
    }
    const { text, author } = this.state;
    return (
      <div id="main" style={{ backgroundColor: colorCode }}>
        <div id="quote-box">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            size="2xl"
            id="icon-quote"
            style={{ color: colorCode }}
          />
          <span id="text" style={{ color: colorCode }}>
            {text}
          </span>
          <p id="author" style={{ color: colorCode }}>
            - {author}
          </p>
          <div id="bottom">
            <div id="links">
              <a href="twitter.com/intent/tweet" id="tweet-quote">
                <FontAwesomeIcon
                  icon={faSquareTwitter}
                  size="2xl"
                  id="icon-twitter"
                  style={{ color: colorCode }}
                />
              </a>
              <a href="" id="tweet-quote">
                <FontAwesomeIcon
                  icon={faSquareTumblr}
                  size="2xl"
                  style={{ color: colorCode }}
                />
              </a>
            </div>
            <button
              id="new-quote"
              onClick={this.newQuoteHandler}
              style={{ backgroundColor: colorCode }}
            >
              New quote
            </button>
          </div>
        </div>
        <span id="developer"> by Dubem</span>
      </div>
    );
  }
}

const quote = {
  "quote-1": {
    text: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    author: "Mark Twain",
  },
  "quote-2": {
    text: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    author: "Erica Jong",
  },
  "quote-3": {
    text: "Do what you can, where you are, with what you have.",
    author: "Teddy Roosevelt",
  },
  "quote-4": {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  "quote-5": {
    text: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  "quote-6": {
    text: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    author: "Hellen Keller",
  },
  "quote-7": {
    text: "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  "quote-8": {
    text: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
    author: "Jamie Paolinetti",
  },
  "quote-9": {
    text: "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    author: "John Lennon",
  },
  "quote-10": {
    text: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
};
export default Quote;
