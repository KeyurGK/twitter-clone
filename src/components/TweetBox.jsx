import { Button } from "@mui/material";
import React, { useContext } from "react";
import "../styles/TweetBox.css";
import { useState } from "react";
import db from "../firebase";
import { useUserContext } from "../context/UserContext";

const TweetBox = (props) => {
  // const dname = user.displayName;
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const { userProfile } = useUserContext();

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: userProfile.userName,
      text: tweetMessage,
      image: tweetImage,
      avatar: userProfile.photo,
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
