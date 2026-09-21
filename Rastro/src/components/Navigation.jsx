import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * components/Navigation.jsx
 * 
 * Barra de navegación con enlaces de React Router DOM (`Link`).
 * Permite moverse fluidamente entre:
 * - Inicio (/)
 * - Instrucciones (/instrucciones)
 * - Comenzar juego (/jugar/casa-mishi)
 */
export default function Navigation() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="rpg-navigation" aria-label="Navegación principal del juego">
      <Link
        to="/"
        className={`rpg-nav-link ${isActive("/") ? "rpg-nav-link--active" : ""}`}
        aria-current={isActive("/") ? "page" : undefined}
      >
        <span aria-hidden="true">🏠</span> Inicio
      </Link>

      <Link
        to="/instrucciones"
        className={`rpg-nav-link ${isActive("/instrucciones") ? "rpg-nav-link--active" : ""}`}
        aria-current={isActive("/instrucciones") ? "page" : undefined}
      >
        <span aria-hidden="true">📜</span> Cómo jugar
      </Link>

      <Link
        to="/jugar/casa-mishi"
        className={`rpg-nav-link rpg-nav-link--play ${isActive("/jugar") ? "rpg-nav-link--active" : ""}`}
        aria-current={isActive("/jugar") ? "page" : undefined}
      >
        <span aria-hidden="true">🐾</span> Jugar
      </Link>
    </nav>
  );
}

