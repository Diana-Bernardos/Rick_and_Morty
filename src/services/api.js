const getDataFromAPi = () => {
   
    return fetch('https://rickandmortyapi.com/documentation/#get-all-characters')
      .then((resp) => resp.json())
      .then((data) => {
        const newArray = data.results.map((results) => {
        console.log(newArray);
          return {
            id: results.id,
            name: results.name,
            image:results.image,
            species:results.species,
          };
        });
        return newArray;
      });
  };
  export default getDataFromAPi;
  