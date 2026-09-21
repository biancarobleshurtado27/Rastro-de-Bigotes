import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * components/Navbar.jsx
 * 
 * Barra superior de navegación estilo marquesina RPG retro cozy.
 * Conecta las pantallas mediante `<Link>` respetando la estética artesanal:
 * madera suave, tonos pastel y sombras pixeladas.
 */
export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="cozy-rpg-navbar">
      {/* Logotipo y Título */}
      <div className="navbar-brand">
        <Link to="/" className="navbar-brand-link">
          <div className="navbar-cat-icon">
            <span className="icon-cat">🐱</span>
            <span className="icon-ribbon">🎀</span>
          </div>
          <div className="navbar-title-group">
            <span className="navbar-title">Rastro de Bigotes</span>
            <span className="navbar-sub">Aventura 2D Cozy</span>
          </div>
        </Link>
      </div>

      {/* Enlaces de navegación con Link */}
      <nav className="navbar-links">
        <Link
          to="/"
          className={`cozy-nav-btn ${isActive("/") ? "cozy-nav-btn--active" : ""}`}
        >
          🏠 Inicio
        </Link>

        <Link
          to="/instrucciones"
          className={`cozy-nav-btn ${isActive("/instrucciones") ? "cozy-nav-btn--active" : ""}`}
        >
          📖 Diario
        </Link>

        <Link
          to="/jugar/casa-mishi"
          className={`cozy-nav-btn cozy-nav-btn--play ${isActive("/jugar") ? "cozy-nav-btn--active" : ""}`}
        >
          🐾 Jugar
        </Link>
      </nav>
    </header>
  );
}
