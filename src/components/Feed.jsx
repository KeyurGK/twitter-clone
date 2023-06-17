import React, { useEffect, useState } from "react";
import "../styles/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post />
    </div>
  );
};

export default Feed;
