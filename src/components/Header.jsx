

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
        <img 
          className="morty" 
          src="../images/rick-and-morty-logo.png" 
        
        />
      </Link>
    </header>
  );
}

export default Header;