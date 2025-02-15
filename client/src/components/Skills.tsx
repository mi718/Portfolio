
import { useRef } from 'react';
import { motion, useInView } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "Vue.js", "Next.js", "TypeScript"] },
  { category: "Design", items: ["Figma", "Adobe XD", "UI/UX", "Prototyping"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px"
  });

  return (
      <section id="skills" className="section section-alt">
        <div className="container">
          <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
          >
            <motion.div
                initial={{ y: 50 }}
                animate={isInView ? { y: 0 } : { y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="section-title">Skills & Expertise</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-card"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <h3 className="skill-title">{skill.category}</h3>
                      <ul className="skill-list">
                        {skill.items.map((item, i) => (
                            <li key={i} className="skill-item">
                              <span className="skill-dot" />
                              {item}
                            </li>
                        ))}
                      </ul>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}
