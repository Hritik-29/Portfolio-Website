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
          I spent two years at Infosys making sense of messy enterprise data for Fortune 500 clients, 
          and somewhere between the SQL queries and SAP go-lives, I realised I was more interested 
          in the business question behind the data than the data itself. That curiosity is what brought me to IIM Shillong.

          At IIM Shillong, I am building the strategic and people skills to operate where decisions actually get made, 
          targeting Strategy Consulting and Product Management roles. Off the clock, I am usually experimenting in the kitchen, 
          because apparently solving ambiguous problems at work was not enough of a challenge.
    </div>
  );
};

export default About;
