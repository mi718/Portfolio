import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProfilePicture from '../assests/ProfilePicture.jpeg';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div>
              <img
                src={ProfilePicture}
                alt="Ryan Hoffman"
                className="about-image"
              />
            </div>
            <div className="about-content">
              <p className="about-text">
                Hey, I’m Micael Stäubli—20 years old and currently in my second semester of Informatics. With 1 year of hands-on experience with React and JavaScript, and 2 years working with Java, I’m passionate about building both backend and frontend solutions. Always learning, always creating—code is my playground!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}