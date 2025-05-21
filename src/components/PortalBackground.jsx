import React, { useEffect } from 'react';

function PortalBackground() {
  // Crear efecto de partículas flotantes
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles');
      if (!particlesContainer) return;
      
      // Limpiar partículas existentes
      particlesContainer.innerHTML = '';
      
      // Número de partículas según el tamaño de la ventana
      const particleCount = Math.min(
        Math.floor(window.innerWidth * window.innerHeight / 12000),
        50
      );
      
      // Crear nuevas partículas
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Tamaño aleatorio
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posición inicial aleatoria
        const startX = Math.random() * window.innerWidth;
        particle.style.left = `${startX}px`;
        particle.style.bottom = '-20px';
        
        // Duración y retraso aleatorios
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 10;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Añadir al DOM
        particlesContainer.appendChild(particle);
      }
    };
    
    // Inicializar y manejar redimensionamiento
    createParticles();
    window.addEventListener('resize', createParticles);
    
    // Limpiar al desmontar
    return () => window.removeEventListener('resize', createParticles);
  }, []);
  
  return (
    <>
      <div className="portal-background"></div>
      <div className="particles"></div>
    </>
  );
}

export default PortalBackground;