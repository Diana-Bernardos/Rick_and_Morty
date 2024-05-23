import { Link} from "react-router-dom";

function CharacterDetail({personDetail}) {



  return (
    personDetail ?(
    <div>
      <h1>{personDetail.name}</h1>
      <img src={personDetail.image} alt=""/>
      <p>{personDetail.species}</p>
      <p>{personDetail.status}</p>
      <p>{personDetail.origin.name}</p>
      <Link to="/">Volver</Link>
    </div>
    )
    : <p>Personaje no encontrado</p>
   
   
  )
   

}

  


export default CharacterDetail
