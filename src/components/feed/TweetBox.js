import React from "react";
import { Avatar, Button } from "@material-ui/core";
import "./tweetbox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="https://s.gravatar.com/avatar/f2f76f81841c48b8344b744065463e49?s=80" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          type="text"
          placeholder="Optional: Enter image URL"
          className="tweetBox__imageInput"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
