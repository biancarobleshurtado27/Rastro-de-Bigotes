import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * components/Navigation.jsx
 * 
 * Barra de navegación con enlaces de React Router DOM (`Link`).
 * Libre de emojis; utiliza tipografía y estilos CSS retro:
 * - Inicio (/)
 * - Cómo jugar (/instrucciones)
 * - Jugar (/jugar/casa-mishi)
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
        Inicio
      </Link>

      <Link
        to="/instrucciones"
        className={`rpg-nav-link ${isActive("/instrucciones") ? "rpg-nav-link--active" : ""}`}
        aria-current={isActive("/instrucciones") ? "page" : undefined}
      >
        Cómo jugar
      </Link>

      <Link
        to="/jugar/casa-mishi"
        className={`rpg-nav-link rpg-nav-link--play ${isActive("/jugar") ? "rpg-nav-link--active" : ""}`}
        aria-current={isActive("/jugar") ? "page" : undefined}
      >
        Jugar
      </Link>
    </nav>
  );
}
