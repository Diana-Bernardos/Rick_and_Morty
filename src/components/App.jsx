import "../styles/App.scss";
import getDataFromAPi from "../services/api";
import { useEffect,useState } from "react";
import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList"; 
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";

function App() {

const [characterList , setCharacterList]=useState([]);

console.log (characterList)



useEffect(()=>{
  getDataFromAPi().then((newArray) => { 
    setCharacterList(newArray)})
   
},[])




  return (
    <>
      <CharacterList data={CharacterList}  />
    </>
  )
}

export default App;
