import { Link } from 'react-router-dom';
import "../images/rick-and-morty-logo.png";

function Header() {
  return (
    <header>
      
        <img 
          className="morty" 
          src="../images/rick-and-morty-logo.png" 
          alt="Rick and Morty Logo" 
        />
    
    </header>
  );
}

export default Header;