import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "./ui/card";

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
                src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec"
                alt="Ryan Hoffman"
                className="about-image"
              />
            </div>
            <div className="about-content">
              <p className="about-text">
                With over 5 years of experience in web development, I specialize in creating 
                intuitive and performant user interfaces. My passion lies in combining clean 
                code with beautiful design to deliver exceptional user experiences.
              </p>
              <p className="about-text">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing my knowledge through technical writing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}