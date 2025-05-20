// Constante con la URL base de la API
const API_URL = 'https://rickandmortyapi.com/api';

// Función para obtener personajes con paginación
const getCharactersByPage = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}/character/?page=${page}`);
    
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Mapear los datos para solo obtener lo que necesitamos
    const characters = data.results.map((character) => ({
      id: character.id,
      name: character.name,
      species: character.species,
      status: character.status,
      origin: character.origin.name,
      location: character.location.name,
      image: character.image,
      episode: character.episode
    }));
    
    return {
      characters,
      totalPages: data.info.pages,
      count: data.info.count
    };
  } catch (error) {
    console.error('Error al obtener personajes:', error);
    return { characters: [], totalPages: 0, count: 0 };
  }
};

// Para mantener compatibilidad con el código existente
const getDataFromAPi = async () => {
  const { characters } = await getCharactersByPage(1);
  return characters;
};

// Obtener un personaje por ID
const getCharacterById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/character/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }
    
    const character = await response.json();
    
    return {
      id: character.id,
      name: character.name,
      species: character.species,
      status: character.status,
      origin: character.origin.name,
      location: character.location.name,
      image: character.image,
      episode: character.episode
    };
  } catch (error) {
    console.error(`Error al obtener el personaje con ID ${id}:`, error);
    return null;
  }
};

// Búsqueda de personajes
const searchCharacters = async (name, status = '', species = '') => {
  try {
    let url = `${API_URL}/character/?name=${name}`;
    
    if (status) {
      url += `&status=${status}`;
    }
    
    if (species && species !== 'All') {
      url += `&species=${species}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      // Si es 404, puede ser que no haya resultados
      if (response.status === 404) {
        return { characters: [], totalPages: 0, count: 0 };
      }
      throw new Error(`Error en la petición: ${response.status}`);
    }
    
    const data = await response.json();
    
    const characters = data.results.map((character) => ({
      id: character.id,
      name: character.name,
      species: character.species,
      status: character.status,
      origin: character.origin.name,
      location: character.location.name,
      image: character.image,
      episode: character.episode
    }));
    
    return {
      characters,
      totalPages: data.info.pages,
      count: data.info.count
    };
  } catch (error) {
    console.error('Error en la búsqueda de personajes:', error);
    return { characters: [], totalPages: 0, count: 0 };
  }
};

export default getDataFromAPi;
export { getCharactersByPage, getCharacterById, searchCharacters };