import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * components/Navbar.jsx
 * 
 * Barra de navegación superior con diseño retro pixel-art.
 * Utiliza el componente `<Link>` de React Router DOM para cambiar de pantalla
 * de forma instantánea sin recargar la página web (Single Page Application).
 */
export default function Navbar() {
  const location = useLocation();

  // Función auxiliar para resaltar visualmente el enlace activo
  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="retro-navbar">
      <div className="retro-navbar__brand">
        <Link to="/" className="retro-navbar__logo">
          <span className="retro-navbar__cat-icon" role="img" aria-label="gatita">🐱</span>
          <span className="retro-navbar__title">Rastro de Bigotes</span>
        </Link>
      </div>

      <nav className="retro-navbar__nav">
        <Link
          to="/"
          className={`retro-btn retro-btn--nav ${isActive("/") ? "retro-btn--active" : ""}`}
        >
          🏠 Inicio
        </Link>

        <Link
          to="/instrucciones"
          className={`retro-btn retro-btn--nav ${isActive("/instrucciones") ? "retro-btn--active" : ""}`}
        >
          📜 Instrucciones
        </Link>

        <Link
          to="/jugar/casa-mishi"
          className={`retro-btn retro-btn--primary retro-btn--nav ${isActive("/jugar") ? "retro-btn--active" : ""}`}
        >
          🎮 Comenzar juego
        </Link>
      </nav>
    </header>
  );
}

