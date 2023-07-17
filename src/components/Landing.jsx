import React, { useContext, useState } from "react";
import "../styles/Landing.css";
import twitterLanding from "../images/twitterLanding.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import { useNavigate, useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { UserContext } from "../context/Context";

const Landing = () => {
  const { user, setUser } = useContext(UserContext);
  const Navigate = useNavigate();
  const handleSubmit = () => {
    Navigate("/signin");
  };
  const handleGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        //setUser(result);
        const userName = result.user.displayName;
        const uid = result.user.uid;
        //const user = { userN: result.user.displayName, id: result.user.uid };
        setUser(result.user);
        Navigate("/home", { state: { userName, id: uid } });
        //console.log(result.user.displayName);
        //console.log(result.user.uid);
      })
      .catch((error) => alert(error.message));
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
          <Button className="google-account" onClick={handleGoogle}>
            Sign Up with Google
          </Button>
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
