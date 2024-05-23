
import CharacterCard from './CharacterCard';

const CharacterList = ({ data = [] }) => {

  return (
  <div className='div'>
    {data.map((character) => (
     <CharacterCard key={character.id} info={character} />
     ))}
 </div>
  
  )
}

export default CharacterList;
