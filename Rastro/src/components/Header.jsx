import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

/**
 * components/Header.jsx
 * 
 * Cabecera accesible del juego.
 * Muestra el logotipo de Mishi, el título principal "Rastro de Bigotes"
 * y contiene la barra de navegación para moverse entre pantallas.
 */
export default function Header() {
  return (
    <header className="rpg-header" role="banner">
      <div className="rpg-header__brand">
        <Link to="/" className="rpg-header__logo-link" aria-label="Ir a la portada de Rastro de Bigotes">
          <div className="rpg-header__cat-emblem" aria-hidden="true">
            <span className="cat-emblem-face">🐱</span>
            <span className="cat-emblem-bow">🎀</span>
          </div>
          <div className="rpg-header__titles">
            <h1 className="rpg-header__title">Rastro de Bigotes</h1>
            <p className="rpg-header__tagline">Un RPG 2D Cozy de Puzzles y Amor Gatuno</p>
          </div>
        </Link>
      </div>

      <Navigation />
    </header>
  );
}

