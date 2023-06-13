import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Sidebar.css";
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@mui/icons-material/Home";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOptions Icon={HomeIcon} text="Home" />
      <SidebarOptions text="Explore" />
      <SidebarOptions text="Notifications" />
      <SidebarOptions />
    </div>
  );
};

export default Sidebar;
