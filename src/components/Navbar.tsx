import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

// ScrollSmoother has been removed (it was gsap-trial — a watermarked package).
// Native smooth scrolling is handled via CSS scroll-behavior on the smooth-wrapper,
// and programmatic navigation uses scrollIntoView.
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0);

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const section = element.getAttribute("data-href");
        if (section) {
          const target = document.querySelector(section);
          target?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        // Close mobile menu after navigation
        setMenuOpen(false);
      });
    });

    const onResize = () => {
      ScrollTrigger.refresh(true);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <div className="header">
        <a 
          href="/#" 
          className="navbar-title" 
          data-cursor="disable"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          HS
        </a>
        <a
          href="mailto:hritikhrk29@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          hritikhrk29@gmail.com
        </a>

        {/* Desktop nav */}
        <ul className="nav-links-desktop">
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              ABOUT
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              WORK
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
