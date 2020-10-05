import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";
import "./tweetbox.css";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Alan Maranto",
      username: "alanmaranto",
      image: tweetImage,
      verified: true,
      text: tweetMessage,
      avatar:
        "https://s.gravatar.com/avatar/f2f76f81841c48b8344b744065463e49?s=80",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://s.gravatar.com/avatar/f2f76f81841c48b8344b744065463e49?s=80" />
          <input
            type="text"
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Optional: Enter image URL"
          className="tweetBox__imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
