import { Button } from "@mui/material";
import React from "react";
import "../styles/TweetBox.css";
import { useState } from "react";
import db from "../firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Aditya",
      username: "ADI",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://avatars.githubusercontent.com/u/56074740?s=400&u=47d26f858ed472b21f75c7226959c61296b65688&v=4",
    });
    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            placeholder="What's happening?"
            value={tweetMessage}
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox_inputImg"
          type="text"
          placeholder="Enter image URL"
        />

        <Button onClick={sendTweet} type="submit" className="tweetBox_btn">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
