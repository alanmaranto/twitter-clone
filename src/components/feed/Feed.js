import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Alan Maranto"
        username="alanmaranto"
        verified
        text="Works"
        avatar="https://s.gravatar.com/avatar/f2f76f81841c48b8344b744065463e49?s=80"
        image="https://media.giphy.com/media/9rtpurjbqiqZXbBBet/giphy.gif"
      />
    </div>
  );
};

export default Feed;
