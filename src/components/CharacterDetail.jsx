import { Link } from "react-router-dom";
import { useEffect } from "react";

function CharacterDetail({ personDetail }) {
  // Scroll al inicio cuando se carga el detalle
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [personDetail]);

  // Si está cargando o no hay personaje
  if (!personDetail) {
    return (
      <div className="detail-container">
        <div className="character-detail">
          <h1>Personaje no encontrado</h1>
          <p>No hemos podido encontrar el personaje que buscas.</p>
          <Link className="back-link" to="/">Volver a la lista</Link>
        </div>
      </div>
    );
  }

  // Formateando episodios para mostrar solo el número
  const formatEpisodes = (episodes) => {
    if (!episodes || !Array.isArray(episodes)) return "Desconocido";
    
    if (episodes.length === 1) {
      return `Episodio ${episodes[0].split('/').pop()}`;
    } else {
      return `Aparece en ${episodes.length} episodios`;
    }
  };

  return (
    <div className="detail-container">
      <div className="character-detail">
        <h1>{personDetail.name}</h1>
        <img className="detail-image" src={personDetail.image} alt={personDetail.name} />
        
        <div className="detail-info">
          <p>
            <strong>Especie:</strong>
            {personDetail.species}
          </p>
          <p>
            <strong>Estado:</strong>
            {personDetail.status}
          </p>
          <p>
            <strong>Origen:</strong>
            {personDetail.origin.name || personDetail.origin}
          </p>
          <p>
            <strong>Localización actual:</strong>
            {personDetail.location.name || personDetail.location}
          </p>
          <p>
            <strong>Episodios:</strong>
            {formatEpisodes(personDetail.episode)}
          </p>
        </div>
        
        <Link className="back-link" to="/">Volver a la lista</Link>
      </div>
    </div>
  );
}

export default CharacterDetail;