import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Página no encontrada</h1>
      <p>Parece que te has perdido en una dimensión desconocida.</p>
      <Link to="/">Volver al portal</Link>
    </div>
  );
}

export default NotFound;