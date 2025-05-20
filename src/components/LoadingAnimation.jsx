import { useEffect, useRef } from 'react';

function LoadingAnimation() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Ajustar el canvas al tamaño del contenedor
    canvas.width = 200;
    canvas.height = 200;
    
    // Variables para la animación
    let hue = 120; // Verde inicial (120 en HSL)
    const particles = [];
    const particleCount = 50;
    
    // Crear partículas iniciales
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        hue: hue
      });
    }
    
    // Función para animar las partículas
    function animate() {
      // Limpiar ligeramente el canvas (efecto de estela)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Dibujar y actualizar partículas
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${p.hue}, 100%, 50%)`;
        ctx.fill();
        
        // Actualizar posición
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Rebote en los bordes
        if (p.x > canvas.width || p.x < 0) p.speedX *= -1;
        if (p.y > canvas.height || p.y < 0) p.speedY *= -1;
        
        // Efecto de "portal"
        const dx = p.x - canvas.width / 2;
        const dy = p.y - canvas.height / 2;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist > 70) {
          p.x = canvas.width / 2;
          p.y = canvas.height / 2;
          p.size = Math.random() * 5 + 1;
          p.speedX = Math.random() * 3 - 1.5;
          p.speedY = Math.random() * 3 - 1.5;
        }
      }
      
      // Cambiar color gradualmente
      hue += 0.5;
      if (hue > 360) hue = 0;
      
      // Continuar la animación
      requestAnimationFrame(animate);
    }
    
    // Iniciar la animación
    animate();
    
    // Limpiar al desmontar
    return () => {
      // La limpieza ocurrirá automáticamente cuando el componente se desmonte
    };
  }, []);
  
  return (
    <div className="loading">
      <canvas ref={canvasRef} className="portal-canvas"></canvas>
      <p>Cargando personajes...</p>
    </div>
  );
}

export default LoadingAnimation;