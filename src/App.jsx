// src/App.js
import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/Dashboard/Dashboard"; // Import Dashboard
import Create from "./pages/Create/Create"; // Import Create
import Setting from './pages/setting/Setting'; // Import Settings

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const { isAuthenticated } = useAuth0();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current ? elementRef.current.offsetTop : 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Ensure this route is present for Dashboard */}
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Dashboard /> : <Home />} 
        />

        {/* Ensure this route is present for Create */}
        <Route path="/create" element={isAuthenticated ? <Create /> : <Home />} />

        {/* Ensure this route is present for Settings */}
        <Route 
          path="/settings" 
          element={isAuthenticated ? <Setting /> : <Home />} 
        />
        
      </Routes>

      {/* Only show these components when not authenticated */}
      {!isAuthenticated && (
        <>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;