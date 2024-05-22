

function Filters ({setFilters}){


/* const handleFilters = (ev) => {
  setFilters(ev.target.value)
}
 */


  return (
    <div>
      <form>
        
        <input type="text" name="" id="" onChange={(ev) => setFilters(ev.target.value)} />

      </form>
    </div>
  );
}


export default Filters;
