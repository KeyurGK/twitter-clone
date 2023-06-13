import React from "react";
import "../styles/SidebarOptions.css";

const SidebarOptions = ({ text, Icon }) => {
  return (
    <div className="sidebarOptions">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOptions;
