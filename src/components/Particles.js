// src/components/Particles.js
import React, { useEffect } from 'react';

const Particles = () => {
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    const particles = [];

    const createParticle = () => {
      const size = Math.random() * 5 + 2;
      particles.push({
        x: Math.random() * canvas.width,
        y: 0,
        size,
        speed: Math.random() * 1 + 1,
      });
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.y += particle.speed;
        if (particle.y > canvas.height) {
          particles.splice(index, 1);
        }
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = () => {
      if (Math.random() < 0.1) createParticle(); // Create particles randomly
      updateParticles();
      requestAnimationFrame(animate);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();

    // Cleanup on component unmount
    return () => {
      particles.length = 0; // Clear particles
    };
  }, []);

  return <canvas id="particle-canvas" className="absolute top-0 opacity-5 left-0 z-0" />;
};

export default Particles;
