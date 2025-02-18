import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function DustParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 100; // Increased from 50 to 100
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 25 + 2, // Increased size range from (1-4) to (2-7)
        duration: Math.random() * 13 + 15, // Increased duration range
        delay: Math.random() * -20
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="dust-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="dust-particle"
          initial={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            scale: 0,
            opacity: 0
          }}
          animate={{
            left: [`${particle.x}%`, `${particle.x + 15}%`, `${particle.x}%`], // Increased movement range
            top: [`${particle.y}%`, `${particle.y - 30}%`, `${particle.y}%`], // Increased vertical movement
            scale: [0, 1, 0],
            opacity: [0, 0.4, 0] // Increased max opacity
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
          style={{
            width: particle.size,
            height: particle.size
          }}
        />
      ))}
    </div>
  );
}