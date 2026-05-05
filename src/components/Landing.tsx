import "./styles/Landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              HRITIK
              <br />
              <span>SRIVASTAVA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>MBA Student</h3>
            <h2>Strategy &amp; Analytics</h2>
          </div>
        </div>
        <div className="character-model">
          <img
            src="/images/hero-avatar.png"
            alt="Hritik Srivastava"
            id="hero-img"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
