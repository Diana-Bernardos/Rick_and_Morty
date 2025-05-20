function Pagination({ currentPage, totalPages, onPageChange }) {
  // Determinar qué páginas mostrar (máximo 5)
  const getPageNumbers = () => {
    const pageNumbers = [];
    
    // Si hay menos de 6 páginas, mostrar todas
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }
    
    // Mostrar primera, última y 3 páginas alrededor de la actual
    if (currentPage <= 3) {
      // Cerca del inicio
      return [1, 2, 3, 4, 5];
    } else if (currentPage >= totalPages - 2) {
      // Cerca del final
      return [totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      // En el medio
      return [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
    }
  };

  // Páginas a mostrar
  const pageNumbers = getPageNumbers();

  return (
    <div className="pagination">
      <button 
        onClick={() => onPageChange(1)} 
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
      
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
      
      <button 
        onClick={() => onPageChange(totalPages)} 
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
}

export default Pagination;