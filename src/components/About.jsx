// components/About.jsx
import React from 'react';
import './About.css';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <motion.section
      ref={ref}
      id="home"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
    >
      <div className="about-section-content">
        <div className="greeting-container">
          <h1>
            <span className="greeting-text">Heyy, I'm </span>
            <span className="name-text">Naveen.</span>
          </h1>
        </div>
        <div className="tagline-container">
          <h2>I design and build scalable, reliable and resilient applications.</h2>
        </div>
        <div className="about-paragraph">
          <div className="about-content">
            {/* Left Column (50%) */}
            <div className="about-text-left">
              <p>
                I'm Lead Developer at{" "}
                <a
                  href="https://amadeus.com/en"
                  className="amadeus-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Amadeus
                </a>{" "}
                with expertise in travel, automotive, and consumer electronics domains.
                I specialize in designing and developing high-performance, scalable,
                and cost-effective software solutions. By focusing on right
                architecture and efficient tools, I ensure consistency and reliability.
                With a strong understanding of modern CI/CD pipelines and the SAFe
                methodology, I utilize a broad knowledge of tech stacks and cloud
                services to deliver scalable, resilient applications.
              </p>
              <div className="social-and-resume">
                <SocialLinks />
                <a
                  href="/assets/naveenkhn_resume.pdf"
                  className="resume-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </div>
            </div>
            {/* Right Column (50%) */}
            <div className="about-text-right">
              <div className="profile-pic-container">
                <div className="profile-pic-bg"></div>
                <img 
                  className="profile-pic" 
                  src="https://github.com/naveenkhn.png?size=250" 
                  alt="Naveen's Profile" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;