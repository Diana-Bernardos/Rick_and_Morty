import "../styles/App.scss";
import getDataFromAPi from "../services/api";
import { useEffect,useState } from "react";
import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList"; 
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";

function App() {

const [characterList , setCharacterList]=useState([]);
const [filters,setFilters]=useState("")

useEffect(()=>{
  getDataFromAPi().then((newArray) => { 
    setCharacterList(newArray)})
},[])

const filterData = characterList.filter((item) => {
  if (filters.length === 0) {
    return item
  } else {
    return filters.includes(item.name)
  }
}).filter((item) => filters ? filters === item.name : true)
console.log(filterData)


  return (
    <>
      <Filters setFilters={setFilters}/>
      <CharacterList data={filterData}/>
      
      
    </>
  )
}

export default App;
