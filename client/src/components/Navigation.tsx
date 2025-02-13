import { useState, useEffect } from "react";
import { Link } from "wouter";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Get all sections
      const sections = ["about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
            <p className="nav-logo">.stäubli</p>
          <div className="nav-items">
            <div className="nav-links">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                  <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                  >
                    {item}
                    <div className="nav-link-indicator" />
                  </a>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
  );
}