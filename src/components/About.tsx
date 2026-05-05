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
          I'm an MBA candidate at IIM Shillong with a background in analytics
          and technology. I've spent 2+ years at Infosys turning messy data into
          decisions that moved business metrics — cutting turnaround by 40%,
          reducing errors by 30%. Now I'm building the strategic and product
          thinking to sit at the table where those decisions get made. I'm
          actively targeting Strategy Consulting and Product Management roles
          where analytical rigour meets business context.
        </p>
      </div>
    </div>
  );
};

export default About;
