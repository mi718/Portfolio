import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <motion.h1 className="hero-title">
            Hello, I'm Micael
          </motion.h1>
          <motion.p className="hero-subtitle">
            A passionate frontend developer crafting beautiful digital experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="hero-button"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}