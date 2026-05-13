import { useParams, useNavigate } from "react-router-dom";
import { workData } from "../data/workData";
import { useEffect } from "react";
import "./styles/ProjectDetails.css";
import { FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = workData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <button className="back-btn" onClick={() => navigate("/")}>
          <FaArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  // Render the specific layout if it has details
  if (project.details) {
    return (
      <div className="project-details-container">
        <button className="back-btn" onClick={() => navigate("/")}>
          <FaArrowLeft /> Back to Portfolio
        </button>
        
        <div className="pd-content">
          <div className="pd-header">
            <h1>
              {project.id === "managerial-readiness-ai" ? (
                <>
                  Managerial Readiness and Organizational Reorientation <br />
                  in the AI Era
                </>
              ) : (
                project.name
              )}
            </h1>
            <p className="pd-description">{project.description}</p>
          </div>

          <div className="pd-main-grid">
            <div className="pd-interviews">
              <h4 className="pd-section-title">WHAT INTERVIEWS REVEALED ACROSS SECTORS</h4>
              <div className="pd-sectors-grid">
                {project.details.sectors.map((sector, idx) => (
                  <div 
                    key={idx} 
                    className="pd-sector-card"
                    style={{ backgroundColor: sector.color }}
                  >
                    <h3 className="pd-sector-name">{sector.name}</h3>
                    <span className="pd-sector-badge">{sector.badge}</span>
                    <ul className="pd-sector-points">
                      {sector.points.map((point, pIdx) => (
                        <li key={pIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="pd-reskilling">
              <h4 className="pd-section-title">Where reskilling is actually falling short</h4>
              <div className="pd-stats">
                {project.details.reskillingStats.map((stat, idx) => (
                  <div key={idx} className="pd-stat-row">
                    <span className="pd-stat-label">{stat.label}</span>
                    <div className="pd-stat-bar-container">
                      <div 
                        className="pd-stat-bar" 
                        style={{ width: `${stat.value}%`, backgroundColor: stat.color }}
                      ></div>
                    </div>
                    <span className="pd-stat-value">{stat.value}%</span>
                  </div>
                ))}
              </div>
              <p className="pd-reskilling-note">{project.details.reskillingNote}</p>
            </div>
          </div>

          {/* Findings Section */}
          {project.details.findings && project.details.findings.length > 0 && (
            <div className="pd-findings-section">
              {project.details.findings.map((finding, idx) => (
                <div className="pd-finding-card" key={idx}>
                  <div 
                    className="pd-finding-left" 
                    style={{ backgroundColor: finding.leftPanelBg, color: finding.leftPanelTextColor || '#333' }}
                  >
                    <span className="pd-finding-id">{finding.id}</span>
                    <h2 className="pd-finding-title">{finding.title}</h2>
                    
                    <div className={`pd-finding-chart type-${finding.chart.type}`}>
                      {finding.chart.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="pd-chart-item">
                          {finding.chart.type === 'bar' && (
                            <div className="pd-chart-bar-container">
                              <span className="pd-chart-value">{item.value}</span>
                              <div className="pd-chart-bar-wrapper">
                                <div className="pd-chart-bar" style={{ height: item.height, backgroundColor: item.color }}></div>
                              </div>
                              <span className="pd-chart-label">{item.label}</span>
                            </div>
                          )}
                          {finding.chart.type === 'block' && (
                            <div className="pd-chart-block-container">
                              <div 
                                className="pd-chart-block" 
                                style={{ height: item.height, backgroundColor: item.color, color: item.labelColor || '#fff' }}
                              >
                                <span className="pd-chart-value">{item.value}</span>
                              </div>
                              <span className="pd-chart-label" style={{ color: item.labelColor || finding.leftPanelTextColor }}>{item.label}</span>
                            </div>
                          )}
                          {finding.chart.type === 'compare' && (
                            <div className="pd-chart-compare-container">
                              <div className="pd-chart-compare-block" style={{ backgroundColor: item.color }}>
                                <span className="pd-chart-value">{item.value}</span>
                              </div>
                              <span className="pd-chart-label">{item.label}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pd-finding-right">
                    <p className="pd-finding-description">{finding.description}</p>
                    <div className="pd-finding-stats">
                      {finding.stats.map((stat, statIdx) => (
                        <div className="pd-finding-stat-card" key={statIdx}>
                          <span className="pd-finding-stat-value" style={{ color: stat.color }}>{stat.value}</span>
                          <span className="pd-finding-stat-label">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pd-finding-source">
                      📄 {finding.source}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="pd-footer-grid">
            <div className="pd-skills">
              <h4 className="pd-section-title">SKILLS DEMONSTRATED</h4>
              <div className="pd-tags">
                {project.details.skills.map((skill, idx) => (
                  <span key={idx} className="pd-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="pd-methods">
              <h4 className="pd-section-title">METHODS</h4>
              <div className="pd-tags">
                {project.details.methods.map((method, idx) => (
                  <span key={idx} className="pd-tag">{method}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallback rendering for projects without specific details object
  return (
    <div className="project-details-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        <FaArrowLeft /> Back to Portfolio
      </button>
      <div className="pd-content">
        <div className="pd-header">
          <h1>{project.name}</h1>
          <p className="pd-description">{project.description}</p>
        </div>
        <div className="pd-tools">
          <h4 className="pd-section-title">TOOLS & TECHNOLOGIES</h4>
          <p>{project.tools}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
