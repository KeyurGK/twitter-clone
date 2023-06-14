import { Button } from "@mui/material";
import React from "react";
import "../styles/TweetBox.css";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox_inputImg"
          type="text"
          placeholder="Enter image URL"
        />

        <Button className="tweetBox_btn">Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;
