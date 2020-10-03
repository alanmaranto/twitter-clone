import React from "react";
import TweetBox from './TweetBox';
import "./feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />
    </div>
  );
};

export default Feed;
