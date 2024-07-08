import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contactus from "./pages/Contactus";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Tabs from "./component/Tabs";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Sidebar from "./pages/Sidebar";

const App = () => {
  const [sidebarTab, setSidebarTab] = useState(null);
  console.log(sidebarTab);
  const handleSidebarClick = (path) => {
    setSidebarTab(path);
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar onTabClick={handleSidebarClick} />
        <div className="App">
          <Tabs sidebarTab={sidebarTab} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<Aboutus />} />
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
