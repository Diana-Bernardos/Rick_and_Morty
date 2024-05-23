import React from 'react'


function Species({species, setSpecies}) {

    const handleSelect = (ev) => {
        setSpecies(ev.target.value)
      }
  return (
    <div className='divselect'>
       <select className='select' name="" id="" onChange={handleSelect} value={species}>
       <option value="All">All</option>
         <option value="Human">Human</option>
         <option value="Alien">Alien</option>
        </select>
    </div>
  )
}
export default Species;