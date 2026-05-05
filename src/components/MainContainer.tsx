import { lazy, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { setCharTimeline, setAllTimeline } from "./utils/GsapScroll";
import { useLoading } from "../context/LoadingProvider";
import { setProgress } from "./Loading";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = () => {
  const { setLoading } = useLoading();
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  // Fix: empty dependency array so this only runs once on mount.
  // isDesktopView is the OUTPUT of this effect, not an input —
  // keeping it in deps caused the listener to re-register on every resize.
  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    const progress = setProgress((value) => setLoading(value));
    progress.loaded().then(() => {
      setTimeout(() => {
        setCharTimeline();
        setAllTimeline();
      }, 500);
    });
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />
            <About />
            <Career />
            <div className="section-divider"></div>
            <Work />
            <div className="section-divider"></div>
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
