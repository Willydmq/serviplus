import React from "react";
import Menu from "./menu";
import { Link } from "react-router-dom";

const SidebarContainer = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <Menu></Menu>
    </aside>
  );
};

export default SidebarContainer;
