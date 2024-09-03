import './About.css';

const About = ({ title, description }) => {
  return (
    <div className="about__container">
      <div className="about__details">
        <h2> {title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default About;
