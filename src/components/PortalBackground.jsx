import { useEffect } from 'react';

function PortalBackground() {
  // Crear partículas flotantes
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.querySelector('.particles');
      if (!particlesContainer) return;
      
      // Limpiar partículas existentes
      particlesContainer.innerHTML = '';
      
      // Número de partículas basado en el tamaño de la pantalla
      const particleCount = Math.floor(window.innerWidth / 20);
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Tamaño aleatorio
        const size = Math.random() * 8 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posición aleatoria
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Duración aleatoria
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Retraso aleatorio
        const delay = Math.random() * 10;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
      }
    };

    // Crear partículas al cargar y al cambiar tamaño
    createParticles();
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);

  return (
    <>
      <div className="portal-background"></div>
      <div className="particles"></div>
    </>
  );
}

export default PortalBackground;