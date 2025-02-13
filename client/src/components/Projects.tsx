import { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import Modal from './Modal';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern e-commerce solution with real-time inventory management",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    details: {
      overview: "A full-featured e-commerce platform built with React and Node.js",
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Customer reviews and ratings",
        "Advanced search and filtering"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
    }
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform for business intelligence",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    details: {
      overview: "A comprehensive analytics dashboard for business metrics",
      features: [
        "Interactive data visualizations",
        "Custom report generation",
        "Real-time data updates",
        "Export functionality"
      ],
      technologies: ["React", "D3.js", "Firebase", "Material-UI"]
    }
  },
  {
    title: "Social Media App",
    description: "Feature-rich social platform with real-time messaging",
    image: "https://images.unsplash.com/photo-1664580618281-fbc47baf6edf",
    details: {
      overview: "A modern social networking platform with real-time features",
      features: [
        "Real-time messaging",
        "Photo sharing",
        "User profiles",
        "Friend suggestions"
      ],
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"]
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px"
  });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
      <section id="projects" className="section">
        <div className="container">
          <motion.div
              ref={ref}
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                  <motion.div
                      key={index}
                      className="project-card"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      layout
                      onClick={() => handleProjectClick(project)}
                  >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                    />
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-technologies">
                        {project.details.technologies.map((tech, index) => (
                            <span key={index} className="technology-tag">
                        {tech}
                      </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <Modal isOpen={!!selectedProject} onClose={closeModal}>
          {selectedProject && (
              <div>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.details.overview}</p>
                <ul>
                  {selectedProject.details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
          )}
        </Modal>
      </section>
  );
}