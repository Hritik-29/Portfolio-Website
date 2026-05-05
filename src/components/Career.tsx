import "./styles/Career.css";
import { careerData } from "../data/careerData";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Growth <br /> Timeline
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerData.map((item, index) => (
            <div className="career-info-box" key={index}>
              {/* Brand-colour ambient blur — using CSS class + inline custom property */}
              <div
                className="career-brand-blur"
                style={{ "--brand-color": item.brandColor } as React.CSSProperties}
              />
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>
                    {item.icon} {item.company}
                  </h5>
                  {item.isCurrentFocus && (
                    <div className="career-current-badge">
                      Currently exploring Strategy, Consulting and Product Management Roles
                    </div>
                  )}
                </div>
                <h3>{item.date}</h3>
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
