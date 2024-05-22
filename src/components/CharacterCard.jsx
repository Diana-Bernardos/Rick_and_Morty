

const CharacterCard = ({info})=> {
  return (
  <div>
      <article>
        <img src={info.image} alt="" />
        <p>{info.name}</p>
        <p>{info.species}</p>
      </article>
  </div>
  )
}

export default CharacterCard
