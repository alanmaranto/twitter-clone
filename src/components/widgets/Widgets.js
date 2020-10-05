import React from "react";
import { Search } from "@material-ui/icons";
import {
  TwitterTweetEmbed,
  TwitterShareButton,
  TwitterTimelineEmbed,
} from "react-twitter-embed";
import "./widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId="1311125948675297280" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="alanmaranto"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url="https://facebook.com/alanmaranto"
          options={{
            text: "reactjs",
            via: "alanmaranto",
          }}
        />
      </div>
    </div>
  );
};

export default Widgets;
