import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "../App.css";
import { auth, provider } from "../firebase";
import { useLocation } from "react-router-dom";
import AuthContext from "../context/Context";

const Home = () => {
  const location = useLocation();
  const { userName, id } = location.state;
  console.log(userName);
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Home;
