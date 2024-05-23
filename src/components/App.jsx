import "../styles/App.scss";
import getDataFromAPi from "../services/api";
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import Header from "./Header";
import Species from "./Species";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";

function App() {

  const [characterList, setCharacterList] = useState([]);
  const [filters, setFilters] = useState("");
  const [species, setSpecies] = useState("Human");

  useEffect(() => {
    getDataFromAPi().then((newArray) => {
      setCharacterList(newArray)
    })
  }, [])

  const filteredData = characterList.filter((item) => {
    return (
      item.name.toLowerCase().includes(filters.toLowerCase()) &&
    (species === "All" || item.species === species)
  );
});


    
    

  const{pathname}= useLocation();
  // si coincide la ruta devuelve los parametros
  const characterRoute = matchPath("/detail/:id",pathname);
  // si no coincide devuelve null
  const characterIdUrl = characterRoute? characterRoute.params.id:null;
  // busca el personaje en el array  
  const personDetail = characterIdUrl?characterList .find((item)=>item.id===parseInt(characterIdUrl)):null
  console.log(characterIdUrl);

  return (
    <>

     <Routes>
        <Route path="/" element={<>
         <Filters filters={filters} setFilters= {setFilters} />
          <Species species={species} setSpecies={setSpecies}/>
          <CharacterList data={filteredData} /></>} />
          <Route path="/detail/:id" element={<CharacterDetail personDetail={personDetail}/>}/> 
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      <Header />
 
    </>
  );
}


export default App;
