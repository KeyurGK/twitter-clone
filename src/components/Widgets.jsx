import React from "react";
import "../styles/Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widget__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={""} />
        <TwitterTimelineEmbed
          className="widgets_widgetContainerTimeline"
          sourceType="profile"
          screenName="ANI"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
};

export default Widgets;
