import React, { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import "./feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    db.collection("posts").onSnapshot((snapshot) => {
      return setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
