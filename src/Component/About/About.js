import React from "react";
import "./About.css";
import pic from "../../assets/picture.jpg";
import Footer from "../Footer/Footer";

const About = () => {
  let username = sessionStorage.getItem("name");
  return (
    <div className="wrap">
      <div className="heading">
        <h1>About Us</h1>
        <p>
          Click & Collect - a menswear brand doesn’t shy away from images to
          showcase the soul and origins of its California roots. It’s a great
          example of how you can use visuals to tell your story and create a
          brand identity that goes beyond the usual wall of text.
        </p>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            <img src="https://tse4.mm.bing.net/th?id=OIP.vR4Fx1gRANDmzx4pdGjRPwHaEK&pid=Api&P=0&h=180" />
          </div>
          <div className="about-content">
            <h2>Welcome to Click & Collect E commerce website</h2>
            <p>
              One of the best parts of Buck Mason’s About Us page? Its calls to
              action (CTAs): “Come have a drink” and “Stop on by.” They’re
              relatable and playful, and they sound like their target audience.
              Don’t ignore your CTA as a key part of your About Us page that can
              add to your brand identity. It’s an opportunity to convey what
              your brand is all about.
            </p>
            <a href="" className="read-more">
              Read More
            </a>
          </div>  
        </section>
      </div>
      <div className="foot">
      <Footer/>
      </div>
    </div>
  );
};

export default About;
