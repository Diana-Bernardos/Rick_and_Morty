import { Link} from "react-router-dom";


function CharacterDetail({personDetail}) {
  console.log(personDetail)
  


  return (
    personDetail ?(
      
    <div className="photo">
      <h1>{personDetail.name}</h1>
      <img src={personDetail.image} alt=""/>
      <p>Species: {personDetail.species}</p>
      <p>Status: {personDetail.status}</p>
      <p>Origin: {personDetail.origin}</p>
      <p>Location: {personDetail.location}</p>
      <p>Episode:{personDetail.episode}</p>
     <Link to="/">Volver</Link>
    </div>
    )
    : <p>Personaje no encontrado</p>
   
  
  )
   

}

  


export default CharacterDetail
