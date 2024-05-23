import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ data = [] }) => {

  /* const html = */ 
  

  return (
  <div>
  {data.map((character) => (
    <CharacterCard key={character.id} info={character} />
  ))}
</div>
  
  )
}

export default CharacterList;
