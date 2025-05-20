import { Link } from "react-router-dom";

const CharacterCard = ({ info }) => {
  // Determinar el color del indicador de estado
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'alive';
      case 'dead':
        return 'dead';
      default:
        return 'unknown';
    }
  };

  return (
    <article className="character-card">
      <Link to={`/detail/${info.id}`}>
        <img className="card-image" src={info.image} alt={info.name} />
        <div className="card-content">
          <h3 className="card-name">{info.name}</h3>
          <p className="card-species">{info.species}</p>
          <div className="card-status">
            <div className={`status-indicator ${getStatusClass(info.status)}`}></div>
            <span>{info.status}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default CharacterCard;
