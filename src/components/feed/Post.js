import React from "react";
import { Avatar } from "@material-ui/core";
import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@material-ui/icons";
import './post.css'

const Post = ({
  displayName,
  username,
  verified,
  timestamp,
  text,
  image,
  avatar,
}) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://s.gravatar.com/avatar/f2f76f81841c48b8344b744065463e49?s=80" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Alan Maranto
              <span className="post__headerSpecial">
                <VerifiedUser className="post__badge" />
                @AlanMaranto
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Let's make dinner</p>
          </div>
        </div>
        <img src="" alt="" />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
