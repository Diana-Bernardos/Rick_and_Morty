
import { useEffect, useRef } from 'react';

function Filters ({ filters, setFilters }) {
  const inputRef = useRef(null);

  // Auto-focus en el input cuando se carga el componente
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (ev) => {
    setFilters(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault(); // Prevenir recarga de página
  };
  
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="filterInput" 
          ref={inputRef}
          onChange={handleChange} 
          value={filters}
          placeholder="Buscar por nombre..."
          aria-label="Filtrar por nombre de personaje"
        />
      </form>
    </div>
  );
}

export default Filters;