import { Link } from "react-router-dom";

const CharacterCard = ({info})=> {
  return (
  
      <article>
        <Link to={`/detail/${info.id}`}>
        <img src={info.image} alt="" />
        <p>{info.name}</p>
        <p>{info.species}</p>
        
        </Link>
      </article>

  )
};

export default CharacterCard
