import "../styles/App.scss";
import { getCharactersByPage, searchCharacters } from "../services/api";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import Header from "./Header";
import Species from "./Species";
import Pagination from "./Pagination";
import Footer from "./Footer";
import NotFound from "./NotFound";
import PortalBackground from "./PortalBackground";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";

function App() {
  // Estados
  const [characterList, setCharacterList] = useState([]);
  const [filters, setFilters] = useState("");
  const [species, setSpecies] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  // Obtener personajes cuando cambia la página
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        let data;
        
        // Si hay filtros activos, usar búsqueda
        if (filters || species !== "All") {
          data = await searchCharacters(filters, "", species);
        } else {
          // Si no hay filtros, usar paginación normal
          data = await getCharactersByPage(currentPage);
        }
        
        setCharacterList(data.characters);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching data:", error);
        setCharacterList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage, filters, species]);

  // Reset página cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, species]);

  // Manejar cambio de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Obtener información para el detalle de personaje
  const { pathname } = useLocation();
  const characterRoute = matchPath("/detail/:id", pathname);
  const characterIdUrl = characterRoute ? characterRoute.params.id : null;
  const personDetail = characterIdUrl
    ? characterList.find((item) => item.id === parseInt(characterIdUrl))
    : null;

  return (
    <>
      {/* Fondo animado */}
      <PortalBackground />
      
      <div className="container">
        {/* Header siempre visible */}
        <Header />
        
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <div className="filters-container">
                  <Filters filters={filters} setFilters={setFilters} />
                  <Species species={species} setSpecies={setSpecies} />
                </div>
                
                <CharacterList data={characterList} loading={loading} />
                
                {!loading && characterList.length > 0 && totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            }
          />
          
          {/* Página de detalle */}
          <Route
            path="/detail/:id"
            element={<CharacterDetail personDetail={personDetail} />}
          />
          
          {/* Página 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Footer siempre visible */}
        <Footer />
      </div>
    </>
  );
}

export default App;