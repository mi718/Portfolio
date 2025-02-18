import { useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import Modal from './Modal';
import ruckZuckImage from '../assests/Logo.svg';
import BJ from '../assests/BlackJack.png';
import BlackjackBanner from '../assests/BlackjackBanner.png';
import RKBanner from '../assests/RKBanner.png';

interface Project {
  title: string;
  description: string;
  image: string;
  banner: string;
  link?: string;
  details: {
    overview: string;
    features: string[];
    technologies: string[];
  };
}

const projects: Project[] = [
  {
    title: "RuckZuck Webpage",
    description: "A modern e-commerce solution with real-time inventory management",
    image: ruckZuckImage,
    banner: RKBanner,
    link: "https://ruckzuck.tools",
    details: {
      overview: "A full-featured e-commerce platform built with React and Node.js",
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Customer reviews and ratings",
        "Advanced search and filtering"
      ],
      technologies: ["React", "Node.js", ".NET", "API Integration"]
    }
  },
  {
    title: "Poker Game",
    description: "Data visualization platform for business intelligence",
    image: BJ,
    banner: BlackjackBanner,
    details: {
      overview: "A comprehensive analytics dashboard for business metrics",
      features: [
        "Interactive data visualizations",
        "Custom report generation",
        "Real-time data updates",
        "Export functionality"
      ],
      technologies: ["React", "Typescript", "Material-UI"]
    }
  },
  {
    title: "CourseClock",
    description: "Feature-rich social platform with real-time messaging",
    image: "https://images.unsplash.com/photo-1664580618281-fbc47baf6edf",
    banner: RKBanner,
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px"
  });

  const handleProjectClick = (project: Project) => {
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
              {projects.map((project: Project, index: number) => (
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
                        {project.details.technologies.map((tech: string, index: number) => (
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
              <div className="modal-project">
                <img
                    src={selectedProject.banner}
                    alt={selectedProject.title}
                    className="modal-project-image"
                />
                <h2 className="modal-project-title">{selectedProject.title}</h2>
                <p className="modal-project-overview">{selectedProject.details.overview}</p>
                <div className="modal-project-section">
                  <h3>Key Features</h3>
                  <ul className="modal-project-features">
                    {selectedProject.details.features.map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="modal-project-section">
                  <h3>Technologies Used</h3>
                  <div className="modal-project-technologies">
                    {selectedProject.details.technologies.map((tech: string, index: number) => (
                        <span key={index} className="technology-tag">
                    {tech}
                  </span>
                    ))}
                  </div>
                </div>
                <div className="modal-project-links">
                  <a href={selectedProject.link} className="modal-project-link live">View Live Demo</a>
                  <a href="#" className="modal-project-link github">View on GitHub</a>
                </div>
              </div>
          )}
        </Modal>
      </section>
  );
}