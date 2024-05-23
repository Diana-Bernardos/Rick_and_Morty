

function Filters ({filters,setFilters}){


 const handleChange = (ev) => {
  setFilters(ev.target.value);
};
 
  return (
    <div>
      <form className="form">
        <label htmlFor="filterInput"></label>
        <input type="text" id="filterInput" onChange={handleChange} value ={filters}/> 

      </form>
    </div>
  )
}


export default Filters;
