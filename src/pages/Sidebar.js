import React from "react";
import "../component/Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ allTabs = [], addTab }) => {
  return (
    <div className="sidebar">
      {allTabs.map((tab) => (
        <div key={tab.id} className="sidebar-item" onClick={() => addTab(tab)}>
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
