import React from "react";
import { Routes, Route } from "react-router-dom";
import Contactus from "./pages/Contactus";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Tabs from "./component/Tabs";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";

const App = () => {
  return (
    <div className="App">
      <Tabs />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  );
};

export default App;
