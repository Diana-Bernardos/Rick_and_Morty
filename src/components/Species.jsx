function Species({ species, setSpecies }) {
  const handleSelect = (ev) => {
    setSpecies(ev.target.value);
  };

  return (
    <div className="divselect">
      <select 
        className="select" 
        onChange={handleSelect} 
        value={species}
        aria-label="Filtrar por especie"
      >
        <option value="All">Todas las especies</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
        <option value="Robot">Robot</option>
        <option value="Animal">Animal</option>
        <option value="Mythological Creature">Criatura Mitológica</option>
        <option value="Humanoid">Humanoide</option>
      </select>
    </div>
  );
}

export default Species;