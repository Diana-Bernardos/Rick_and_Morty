

const CharacterCard = ({info})=> {
  return (
  
      <article>
        <img src={info.imgage} alt="" />
        <p>{info.name}</p>
        <p>{info.species}</p>
      </article>
  
  )
}

export default CharacterCard;
