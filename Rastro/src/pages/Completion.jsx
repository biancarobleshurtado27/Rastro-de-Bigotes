import React from "react";
import { Link } from "react-router-dom";

/**
 * pages/Completion.jsx
 * 
 * Pantalla temporal de finalización del juego.
 * Muestra el reencuentro de Mishi y Yosu, un mensaje cálido de cierre,
 * y los botones requeridos para volver al inicio o jugar de nuevo.
 */
export default function Completion() {
  return (
    <div className="page page--completion">
      <div className="cozy-completion-card">
        {/* Decoración flotante */}
        <div className="completion-decor-icons" aria-hidden="true">
          <span>💖</span>
          <span>🐾</span>
          <span>💕</span>
        </div>

        {/* Título principal solicitado */}
        <h2 className="completion-title">Mishi y Yosu están juntos otra vez</h2>

        {/* Mensaje cálido de cierre solicitado */}
        <p className="completion-warm-message">
          El rastro de bigotes ha llegado a su fin. Después de una travesía llena de amor,
          puzzles y calma por la habitación, los tejados y el jardín, Mishi y Yosu disfrutan
          nuevamente de la cálida brisa del atardecer juntos.
        </p>

        {/* Pequeña ilustración conmemorativa con HTML y CSS */}
        <div className="completion-cats-emblem" aria-label="Mishi y Yosu juntos felices">
          <div className="cat-badge">
            <span className="cat-avatar">🐱</span>
            <span className="cat-name">Mishi 🎀</span>
          </div>
          <span className="heart-link">❤️</span>
          <div className="cat-badge">
            <span className="cat-avatar">🐱</span>
            <span className="cat-name">Yosu 🐟</span>
          </div>
        </div>

        {/* Botones requeridos: "Volver al inicio" y "Jugar de nuevo" */}
        <div className="completion-actions-row">
          <Link to="/" className="cozy-btn cozy-btn--secondary">
            🏠 Volver al inicio
          </Link>

          <Link to="/jugar/casa-mishi" className="cozy-btn cozy-btn--hero">
            🔄 Jugar de nuevo
          </Link>
        </div>
      </div>
    </div>
  );
}
