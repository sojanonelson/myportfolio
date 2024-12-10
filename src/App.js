import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, useNavigate, useLocation } from "react-router-dom";
import "tailwindcss/tailwind.css";
import axios from "axios";
import About from "./components/About";
import Project from "./components/Project";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css"

const App = () => (
  <Router>
    <MainContent />
  </Router>
);

const MainContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [viewCount, setViewCount] = useState(0);

  // Increment and fetch view count on mount
  useEffect(() => {
    const incrementAndFetchCount = async () => {
      try {
        // Increment the view count
        await axios.post("https://myportfolio-8gej.onrender.com/increment");

        // Fetch the updated view count
        const response = await axios.get("https://myportfolio-8gej.onrender.com/count");
        setViewCount(response.data.count);
      } catch (error) {
        console.error("Error fetching or incrementing view count:", error);
      }
    };

    incrementAndFetchCount();
  }, []);

  useEffect(() => {
    const sectionId = location.pathname.substring(1);
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar navigate={navigate} />
      <Home viewCount={viewCount}/>
      <About />
      <Project/>
      <Contact/>
    </div>
  );
};

const Navbar = ({ navigate }) => (
  <nav className="fixed top-0 left-0 w-full bg-[#101010] py-5 z-10  select-none text-white poppins-bold">
    <ul className="flex justify-center  space-x-5 p-4">
      <NavItem navigate={navigate} to="home" label="Home" />
      <NavItem navigate={navigate} to="about" label="About" />
      <NavItem navigate={navigate} to="projects" label="Projects" />
      <NavItem navigate={navigate} to="contact" label="Contact" />
    </ul>
  </nav>
);

const NavItem = ({ navigate, to, label }) => (
  <li>
    <button
      onClick={() => navigate(`/${to === "home" ? "" : to}`)}
      className="hover:text-yellow-400 focus:outline-none"
    >
      {label}
    </button>
  </li>
);





export default App;
