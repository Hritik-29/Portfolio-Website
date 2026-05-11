import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-image">
        <img src="/images/about.png" alt="About Me" loading="lazy" decoding="async" />
      </div>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I came to management with two years of real enterprise experience, working across ERP systems, SQL, and BI tools. At IIM Shillong, I am translating that into strategy and leadership. Outside class, I lead sustainability initiatives through the EcoBiz club. A rare blend of technical execution, business strategy, and people-first thinking that lets me operate confidently across all three.
        </p>
      </div>
    </div>
  );
};

export default About;
