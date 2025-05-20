function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Rick and Morty Fan App</p>
      <div className="footer-links">
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">
          API
        </a>
        <a href="#" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          Volver arriba
        </a>
      </div>
    </footer>
  );
}

export default Footer;