import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Tab from "./Tab";
import "../component/TabBar.css";
import Sidebar from "../pages/Sidebar";

const Tabs = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: "Home", path: "/", closable: false },
  ]);
  const [allTabs] = useState([
    { id: 2, title: "About Us", path: "/about-us", closable: true },
    { id: 3, title: "Contact Us", path: "/contact-us", closable: true },
    { id: 4, title: "Services", path: "/services", closable: true },
    { id: 5, title: "Blogs", path: "/blogs", closable: true },
    { id: 6, title: "Testimonials", path: "/testimonials", closable: true },
  ]);

  const [tabOrder, setTabOrder] = useState(tabs.map((tab) => tab.path));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setTabOrder(tabs.map((tab) => tab.path));
  }, [tabs]);

  useEffect(() => {
    if (!tabs.find((tab) => tab.path === location.pathname)) {
      const currentTabIndex = tabOrder.indexOf(location.pathname);
      let newTabPath = "/";

      if (currentTabIndex !== -1) {
        const previousTabPath = tabOrder[currentTabIndex - 1];
        const nextTabPath = tabOrder[currentTabIndex + 1];

        if (previousTabPath && previousTabPath !== "/") {
          newTabPath = previousTabPath;
        } else if (nextTabPath && nextTabPath !== "/") {
          newTabPath = nextTabPath;
        }
      }

      navigate(newTabPath);
    }
  }, [tabs, location, navigate, tabOrder]);

  const removeTab = (id) => {
    setTabs(tabs.filter((tab) => tab.id !== id));
  };

  const addTab = (tab) => {
    if (!tabs.find((t) => t.id === tab.id)) {
      setTabs([...tabs, tab]);
      navigate(tab.path);
    } else {
      navigate(tab.path);
    }
  };

  return (
    <div>
      <div className="tabs">
        {tabs.map((tab) => (
          <NavLink key={tab.id} to={tab.path}>
            <Tab
              title={tab.title}
              closable={tab.closable}
              onClose={() => removeTab(tab.id)}
            />
          </NavLink>
        ))}
      </div>
      <Sidebar allTabs={allTabs} addTab={addTab} />
    </div>
  );
};

export default Tabs;
