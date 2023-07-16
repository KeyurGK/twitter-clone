import React from "react";
import "../styles/Landing.css";
import twitterLanding from "../images/twitterLanding.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const Navigate = useNavigate();
  const handleSubmit = () => {
    Navigate("/signin");
  };
  return (
    <div className="container">
      <div className="container-left">
        <img src={twitterLanding} />
      </div>
      <div className="container-right">
        <TwitterIcon className="twitter-icon" />
        <h3>Happening Now</h3>
        <h4>Join Twitter Today.</h4>
        <div className="account_auth">
          <Button className="google-account">Sign Up with Google</Button>
          <p>or</p>
          <Button className="create-account" onClick={handleSubmit}>
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
