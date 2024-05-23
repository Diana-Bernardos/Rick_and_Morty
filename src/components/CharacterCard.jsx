import { Link } from "react-router-dom";

const CharacterCard = ({info})=> {
  return (
  <div className="div">
      <article className="article">
        <Link to={`/detail/${info.id}`}>
        <img src={info.image} alt="" />
        <p>{info.name}</p>
        <p>{info.species}</p>
        
        </Link>
      </article>
</div>
  )
};

export default CharacterCard
