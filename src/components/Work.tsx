import { useRef, useState, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { workData } from "../data/workData";

const Work = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 5);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 1024 ? 600 : window.innerWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <h2>
            My <span>Projects</span>
          </h2>
          <div className="work-nav-arrows">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll Left"
              disabled={!canScrollLeft}
              className={!canScrollLeft ? "disabled" : ""}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll Right"
              disabled={!canScrollRight}
              className={!canScrollRight ? "disabled" : ""}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div
          className={`work-flex ${canScrollRight ? "fade-right" : ""} ${canScrollLeft ? "fade-left" : ""}`}
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {workData.map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{item.name}</h4>
                    <p className="work-category">{item.category}</p>
                  </div>
                </div>
                <p className="work-description">{item.description}</p>
                <div className="work-tags">
                  {item.tools.split(", ").map((tag, i) => (
                    <span key={i} className="work-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <WorkImage image={item.image} alt={item.name} link={item.link} video={item.video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
