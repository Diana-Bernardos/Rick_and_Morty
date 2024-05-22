import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ data = [] }) => {
  const html = data.map((character) => (
    <CharacterCard key={character.id} info={character} />
  ));

  return (
  <div>{html}</div>
  )
};

export default CharacterList;
