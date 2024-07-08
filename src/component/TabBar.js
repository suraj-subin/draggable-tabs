// TabBar.js
import React, { useState } from "react";
import Tab from "./Tab";
import "./TabBar.css"; // Create a CSS file for styling

const TabBar = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="tab-bar">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab}
          isActive={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        />
      ))}
      <div className="tab-content">
        <h1>{activeTab} Content</h1>
      </div>
    </div>
  );
};

export default TabBar;
