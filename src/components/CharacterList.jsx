import CharacterCard from './CharacterCard';

const CharacterList = ({ data = [], loading = false }) => {
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="no-results">
        <h2>No hay personajes que coincidan con tu búsqueda</h2>
        <p>Intenta con otro nombre o filtro</p>
      </div>
    );
  }

  return (
    <div className="characters-grid">
      {data.map((character) => (
        <CharacterCard key={character.id} info={character} />
      ))}
    </div>
  );
};

export default CharacterList;
