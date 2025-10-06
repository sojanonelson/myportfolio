import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { Bot } from "lucide-react";
import About from "./components/About";
import Project from "./components/Project";
import Home from "./components/Home";
import Contact from "./components/Contact";
import CareerRouteMap from "./components/CareerMap";
import "./App.css";

const App = () => (
  <Router>
    <MainContent />
  </Router>
);

const MainContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [viewCount, setViewCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Increment and fetch view count on mount
  useEffect(() => {
    const incrementAndFetchCount = async () => {
      try {
        await axios.post("https://myportfolio-8gej.onrender.com/increment");
        const response = await axios.get(
          "https://myportfolio-8gej.onrender.com/count"
        );
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
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="App bg-[#0a0a0a] text-white ">
      <Navbar
        navigate={navigate}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Home viewCount={viewCount} />
      <About />
      <Project />
      <Contact />
      <CareerRouteMap />
      <AIAssistantIcon />
    </div>
  );
};

const Navbar = ({ navigate, isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-sm py-3 z-50 select-none border-b border-green-500/20">
    <div className="container mx-auto px-4 flex justify-center items-center">
      <ul className="hidden md:flex space-x-8">
        <NavItem navigate={navigate} to="home" label="Home" />
        <NavItem navigate={navigate} to="about" label="About" />
        <NavItem navigate={navigate} to="projects" label="Projects" />
        <NavItem navigate={navigate} to="contact" label="Contact" />
        <NavItem navigate={navigate} to="career" label="Career" />
      </ul>

      <button
        className="md:hidden text-green-400 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-[#0a0a0a] border-t border-green-500/20">
        <ul className="flex flex-col space-y-4 p-4">
          <MobileNavItem
            navigate={navigate}
            to="home"
            label="Home"
            setIsMenuOpen={setIsMenuOpen}
          />
          <MobileNavItem
            navigate={navigate}
            to="about"
            label="About"
            setIsMenuOpen={setIsMenuOpen}
          />
          <MobileNavItem
            navigate={navigate}
            to="projects"
            label="Projects"
            setIsMenuOpen={setIsMenuOpen}
          />
          <MobileNavItem
            navigate={navigate}
            to="contact"
            label="Contact"
            setIsMenuOpen={setIsMenuOpen}
          />
          <MobileNavItem
            navigate={navigate}
            to="career"
            label="Career"
            setIsMenuOpen={setIsMenuOpen}
          />
        </ul>
      </div>
    )}
  </nav>
);

const NavItem = ({ navigate, to, label }) => (
  <li>
    <button
      onClick={() => navigate(`/${to === "home" ? "" : to}`)}
      className="relative py-4 text-white hover:text-green-400 transition-colors duration-300 group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
    </button>
  </li>
);

const MobileNavItem = ({ navigate, to, label, setIsMenuOpen }) => (
  <li>
    <button
      onClick={() => {
        navigate(`/${to === "home" ? "" : to}`);
        setIsMenuOpen(false);
      }}
      className="w-full text-left text-white hover:text-green-400 py-2 px-4 transition-colors duration-300"
    >
      {label}
    </button>
  </li>
);

const AIAssistantIcon = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] px-3 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
            <div className="text-sm font-medium">
              Option is unavailable right now
            </div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#30363d]"></div>
          </div>
        )}

        {/* AI Icon with bouncing animation */}
        <div className="bg-gradient-to-r from-[#00ff41] to-[#00cc33] p-4 rounded-full shadow-lg shadow-[#00ff41]/30 cursor-pointer hover:shadow-[#00ff41]/50 transition-all duration-300 animate-bounce-slow">
          <Bot className="w-6 h-6 text-black" />
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
